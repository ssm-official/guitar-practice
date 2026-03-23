import * as Tone from "tone";

export type ClickSound = "classic" | "wood" | "hi-hat";
export type Subdivision = "quarter" | "eighth" | "triplet" | "sixteenth";
export type TimeSignature = "4/4" | "3/4" | "6/8";

/* eslint-disable @typescript-eslint/no-explicit-any */
const SOUND_CONFIGS: Record<ClickSound, { accent: Record<string, any>; normal: Record<string, any> }> = {
  classic: {
    accent: { oscillator: { type: "sine" }, envelope: { attack: 0.001, decay: 0.1, sustain: 0, release: 0.05 } },
    normal: { oscillator: { type: "sine" }, envelope: { attack: 0.001, decay: 0.08, sustain: 0, release: 0.05 } },
  },
  wood: {
    accent: { oscillator: { type: "triangle" }, envelope: { attack: 0.001, decay: 0.06, sustain: 0, release: 0.02 } },
    normal: { oscillator: { type: "triangle" }, envelope: { attack: 0.001, decay: 0.04, sustain: 0, release: 0.02 } },
  },
  "hi-hat": {
    accent: { oscillator: { type: "square" }, envelope: { attack: 0.001, decay: 0.03, sustain: 0, release: 0.01 } },
    normal: { oscillator: { type: "square" }, envelope: { attack: 0.001, decay: 0.02, sustain: 0, release: 0.01 } },
  },
};

const ACCENT_FREQ: Record<ClickSound, number> = { classic: 1200, wood: 1800, "hi-hat": 6000 };
const NORMAL_FREQ: Record<ClickSound, number> = { classic: 800, wood: 1200, "hi-hat": 4500 };
const SUB_FREQ: Record<ClickSound, number> = { classic: 600, wood: 900, "hi-hat": 3500 };

export function getBeatsPerBar(timeSig: TimeSignature): number {
  switch (timeSig) {
    case "4/4": return 4;
    case "3/4": return 3;
    case "6/8": return 6;
  }
}

export function getSubdivisionsPerBeat(sub: Subdivision): number {
  switch (sub) {
    case "quarter": return 1;
    case "eighth": return 2;
    case "triplet": return 3;
    case "sixteenth": return 4;
  }
}

export class MetronomeEngine {
  private synth: Tone.Synth;
  private gainNode: Tone.Gain;
  private _isPlaying = false;
  private currentBeat = 0;
  private currentSubdivision = 0;
  private sound: ClickSound = "classic";
  private muted = false;

  onBeat: ((beat: number, subdivision: number) => void) | null = null;

  constructor() {
    this.synth = new Tone.Synth().toDestination();
    this.synth.set(SOUND_CONFIGS.classic.normal);
    this.gainNode = new Tone.Gain(0.7).toDestination();
    this.synth.disconnect();
    this.synth.connect(this.gainNode);
  }

  get isPlaying() { return this._isPlaying; }

  setSound(s: ClickSound) {
    this.sound = s;
  }

  setMuted(m: boolean) {
    this.muted = m;
    this.gainNode.gain.value = m ? 0 : 0.7;
  }

  async start(
    bpm: number,
    timeSig: TimeSignature,
    subdivision: Subdivision,
    swing: number,
  ) {
    await Tone.start();

    this.currentBeat = 0;
    this.currentSubdivision = 0;

    const beatsPerBar = getBeatsPerBar(timeSig);
    const subsPerBeat = getSubdivisionsPerBeat(subdivision);
    const totalSubs = beatsPerBar * subsPerBeat;

    // For 6/8, the "beat" unit is a dotted quarter (3 eighths)
    // BPM refers to the main beat pulse
    const subInterval = 60 / (bpm * subsPerBeat);

    Tone.getTransport().bpm.value = bpm;
    Tone.getTransport().cancel();

    let subIndex = 0;

    const scheduleClick = (time: number) => {
      const beat = Math.floor(subIndex / subsPerBeat);
      const sub = subIndex % subsPerBeat;

      const isAccent = beat === 0 && sub === 0;
      const isMainBeat = sub === 0;

      // Apply swing to even subdivisions (for eighth/sixteenth)
      let adjustedTime = time;
      if (swing > 0 && sub % 2 === 1 && subsPerBeat >= 2) {
        adjustedTime += (swing / 100) * subInterval * 0.5;
      }

      if (!this.muted) {
        const config = isAccent
          ? SOUND_CONFIGS[this.sound].accent
          : SOUND_CONFIGS[this.sound].normal;

        const freq = isAccent
          ? ACCENT_FREQ[this.sound]
          : isMainBeat
            ? NORMAL_FREQ[this.sound]
            : SUB_FREQ[this.sound];

        const vol = isAccent ? 0 : isMainBeat ? -4 : -8;

        this.synth.set(config);
        this.synth.volume.setValueAtTime(vol, adjustedTime);
        this.synth.triggerAttackRelease(freq, "32n", adjustedTime);
      }

      // Fire callback on the main thread for UI updates
      Tone.getDraw().schedule(() => {
        this.currentBeat = beat;
        this.currentSubdivision = sub;
        this.onBeat?.(beat, sub);
      }, time);

      subIndex = (subIndex + 1) % totalSubs;
    };

    const loopEvent = new Tone.Loop(scheduleClick, subInterval);
    loopEvent.start(0);

    Tone.getTransport().start();
    this._isPlaying = true;
  }

  stop() {
    Tone.getTransport().stop();
    Tone.getTransport().cancel();
    this._isPlaying = false;
    this.currentBeat = 0;
    this.currentSubdivision = 0;
  }

  dispose() {
    this.stop();
    this.synth.dispose();
    this.gainNode.dispose();
  }
}
