"use client";

import type { ClickSound, Subdivision, TimeSignature } from "@/lib/audio";

interface Props {
  bpm: number;
  timeSig: TimeSignature;
  subdivision: Subdivision;
  swing: number;
  sound: ClickSound;
  muted: boolean;
  isPlaying: boolean;
  autoSpeedUp: boolean;
  autoSpeedBars: number;
  autoSpeedIncrement: number;
  onBpmChange: (bpm: number) => void;
  onTimeSigChange: (ts: TimeSignature) => void;
  onSubdivisionChange: (s: Subdivision) => void;
  onSwingChange: (v: number) => void;
  onSoundChange: (s: ClickSound) => void;
  onMutedChange: (m: boolean) => void;
  onTogglePlay: () => void;
  onTap: () => void;
  onAutoSpeedUpChange: (on: boolean) => void;
  onAutoSpeedBarsChange: (bars: number) => void;
  onAutoSpeedIncrementChange: (inc: number) => void;
}

const TIME_SIGS: TimeSignature[] = ["4/4", "3/4", "6/8"];
const SUBDIVISIONS: { value: Subdivision; label: string }[] = [
  { value: "quarter", label: "1/4" },
  { value: "eighth", label: "1/8" },
  { value: "triplet", label: "Trip" },
  { value: "sixteenth", label: "1/16" },
];
const SOUNDS: ClickSound[] = ["classic", "wood", "hi-hat"];

function Btn({ active, onClick, children, small }: { active?: boolean; onClick: () => void; children: React.ReactNode; small?: boolean }) {
  return (
    <button
      onClick={onClick}
      className={`
        ${small ? "px-3 py-1.5 text-xs" : "px-4 py-2 text-sm"}
        rounded-lg font-medium transition-colors
        ${active ? "bg-cyan-500 text-zinc-950" : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"}
      `}
    >
      {children}
    </button>
  );
}

export function Controls(props: Props) {
  return (
    <div className="space-y-6 w-full max-w-md">
      {/* BPM */}
      <div className="flex flex-col items-center gap-3">
        <div className="flex items-center gap-4">
          <button
            onClick={() => props.onBpmChange(props.bpm - 1)}
            className="w-10 h-10 rounded-lg bg-zinc-800 text-zinc-300 hover:bg-zinc-700 text-xl font-bold"
          >
            -
          </button>
          <div className="text-center">
            <input
              type="number"
              value={props.bpm}
              onChange={(e) => props.onBpmChange(Number(e.target.value))}
              className="w-24 text-center text-5xl font-bold bg-transparent text-white outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              min={30}
              max={240}
            />
            <div className="text-xs text-zinc-500 uppercase tracking-wider mt-1">BPM</div>
          </div>
          <button
            onClick={() => props.onBpmChange(props.bpm + 1)}
            className="w-10 h-10 rounded-lg bg-zinc-800 text-zinc-300 hover:bg-zinc-700 text-xl font-bold"
          >
            +
          </button>
        </div>
        <input
          type="range"
          min={30}
          max={240}
          value={props.bpm}
          onChange={(e) => props.onBpmChange(Number(e.target.value))}
          className="w-full accent-cyan-500"
        />
      </div>

      {/* Play / Tap */}
      <div className="flex gap-3 justify-center">
        <button
          onClick={props.onTogglePlay}
          className={`
            px-8 py-3 rounded-xl text-lg font-bold transition-colors
            ${props.isPlaying ? "bg-red-500 hover:bg-red-600 text-white" : "bg-cyan-500 hover:bg-cyan-400 text-zinc-950"}
          `}
        >
          {props.isPlaying ? "Stop" : "Start"}
        </button>
        <button
          onClick={props.onTap}
          className="px-6 py-3 rounded-xl text-lg font-bold bg-zinc-800 text-zinc-300 hover:bg-zinc-700 transition-colors"
        >
          Tap
        </button>
        <button
          onClick={() => props.onMutedChange(!props.muted)}
          className={`px-4 py-3 rounded-xl text-lg transition-colors ${props.muted ? "bg-yellow-600 text-white" : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"}`}
          title={props.muted ? "Unmute" : "Mute"}
        >
          {props.muted ? "🔇" : "🔊"}
        </button>
      </div>

      {/* Time Signature */}
      <div>
        <label className="block text-xs text-zinc-500 uppercase tracking-wider mb-2">Time Signature</label>
        <div className="flex gap-2">
          {TIME_SIGS.map((ts) => (
            <Btn key={ts} active={props.timeSig === ts} onClick={() => props.onTimeSigChange(ts)}>
              {ts}
            </Btn>
          ))}
        </div>
      </div>

      {/* Subdivision */}
      <div>
        <label className="block text-xs text-zinc-500 uppercase tracking-wider mb-2">Subdivision</label>
        <div className="flex gap-2">
          {SUBDIVISIONS.map((s) => (
            <Btn key={s.value} active={props.subdivision === s.value} onClick={() => props.onSubdivisionChange(s.value)}>
              {s.label}
            </Btn>
          ))}
        </div>
      </div>

      {/* Sound */}
      <div>
        <label className="block text-xs text-zinc-500 uppercase tracking-wider mb-2">Click Sound</label>
        <div className="flex gap-2">
          {SOUNDS.map((s) => (
            <Btn key={s} active={props.sound === s} onClick={() => props.onSoundChange(s)} small>
              {s}
            </Btn>
          ))}
        </div>
      </div>

      {/* Swing */}
      <div>
        <label className="block text-xs text-zinc-500 uppercase tracking-wider mb-2">
          Swing: {props.swing}%
        </label>
        <input
          type="range"
          min={0}
          max={100}
          value={props.swing}
          onChange={(e) => props.onSwingChange(Number(e.target.value))}
          className="w-full accent-cyan-500"
        />
      </div>

      {/* Auto Speed-Up */}
      <div className="bg-zinc-900 rounded-xl p-4 space-y-3">
        <div className="flex items-center justify-between">
          <label className="text-xs text-zinc-500 uppercase tracking-wider">Speed Training</label>
          <button
            onClick={() => props.onAutoSpeedUpChange(!props.autoSpeedUp)}
            className={`w-10 h-6 rounded-full transition-colors relative ${props.autoSpeedUp ? "bg-cyan-500" : "bg-zinc-700"}`}
          >
            <span className={`absolute top-0.5 w-5 h-5 rounded-full bg-white transition-transform ${props.autoSpeedUp ? "left-[18px]" : "left-0.5"}`} />
          </button>
        </div>
        {props.autoSpeedUp && (
          <div className="flex gap-4 text-sm text-zinc-400">
            <div>
              <span className="text-xs text-zinc-500">Every</span>
              <select
                value={props.autoSpeedBars}
                onChange={(e) => props.onAutoSpeedBarsChange(Number(e.target.value))}
                className="ml-1 bg-zinc-800 text-zinc-300 rounded px-2 py-1"
              >
                {[2, 4, 8, 16].map((n) => (
                  <option key={n} value={n}>{n} bars</option>
                ))}
              </select>
            </div>
            <div>
              <span className="text-xs text-zinc-500">Add</span>
              <select
                value={props.autoSpeedIncrement}
                onChange={(e) => props.onAutoSpeedIncrementChange(Number(e.target.value))}
                className="ml-1 bg-zinc-800 text-zinc-300 rounded px-2 py-1"
              >
                {[1, 2, 5, 10].map((n) => (
                  <option key={n} value={n}>+{n} BPM</option>
                ))}
              </select>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
