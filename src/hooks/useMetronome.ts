"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { MetronomeEngine, type ClickSound, type Subdivision, type TimeSignature } from "@/lib/audio";

export interface MetronomeState {
  bpm: number;
  timeSig: TimeSignature;
  subdivision: Subdivision;
  swing: number;
  sound: ClickSound;
  muted: boolean;
  isPlaying: boolean;
  currentBeat: number;
  currentSub: number;
  autoSpeedUp: boolean;
  autoSpeedBars: number;
  autoSpeedIncrement: number;
}

const DEFAULT_STATE: MetronomeState = {
  bpm: 120,
  timeSig: "4/4",
  subdivision: "quarter",
  swing: 0,
  sound: "classic",
  muted: false,
  isPlaying: false,
  currentBeat: -1,
  currentSub: 0,
  autoSpeedUp: false,
  autoSpeedBars: 4,
  autoSpeedIncrement: 5,
};

export function useMetronome() {
  const [state, setState] = useState<MetronomeState>(DEFAULT_STATE);
  const engineRef = useRef<MetronomeEngine | null>(null);
  const barCountRef = useRef(0);
  const stateRef = useRef(state);
  stateRef.current = state;

  useEffect(() => {
    const engine = new MetronomeEngine();
    engineRef.current = engine;

    engine.onBeat = (beat, sub) => {
      setState((prev) => {
        const next = { ...prev, currentBeat: beat, currentSub: sub };

        // Auto speed-up: when beat wraps to 0 and sub is 0, that's a new bar
        if (beat === 0 && sub === 0 && prev.currentBeat > 0 && prev.autoSpeedUp) {
          barCountRef.current++;
          if (barCountRef.current >= prev.autoSpeedBars) {
            barCountRef.current = 0;
            const newBpm = Math.min(240, prev.bpm + prev.autoSpeedIncrement);
            next.bpm = newBpm;
            // Restart with new BPM — schedule async
            setTimeout(() => {
              engineRef.current?.stop();
              engineRef.current?.start(newBpm, prev.timeSig, prev.subdivision, prev.swing);
            }, 0);
          }
        }
        return next;
      });
    };

    return () => engine.dispose();
  }, []);

  const togglePlay = useCallback(async () => {
    const engine = engineRef.current;
    if (!engine) return;
    const s = stateRef.current;

    if (engine.isPlaying) {
      engine.stop();
      setState((prev) => ({ ...prev, isPlaying: false, currentBeat: -1, currentSub: 0 }));
      barCountRef.current = 0;
    } else {
      await engine.start(s.bpm, s.timeSig, s.subdivision, s.swing);
      setState((prev) => ({ ...prev, isPlaying: true }));
    }
  }, []);

  const restart = useCallback(async () => {
    const engine = engineRef.current;
    if (!engine || !engine.isPlaying) return;
    const s = stateRef.current;
    engine.stop();
    barCountRef.current = 0;
    await engine.start(s.bpm, s.timeSig, s.subdivision, s.swing);
  }, []);

  const setBpm = useCallback((bpm: number) => {
    const clamped = Math.max(30, Math.min(240, bpm));
    setState((prev) => ({ ...prev, bpm: clamped }));
    if (engineRef.current?.isPlaying) {
      const s = stateRef.current;
      engineRef.current.stop();
      engineRef.current.start(clamped, s.timeSig, s.subdivision, s.swing);
    }
  }, []);

  const setTimeSig = useCallback((timeSig: TimeSignature) => {
    setState((prev) => ({ ...prev, timeSig }));
  }, []);

  const setSubdivision = useCallback((subdivision: Subdivision) => {
    setState((prev) => ({ ...prev, subdivision }));
  }, []);

  const setSwing = useCallback((swing: number) => {
    setState((prev) => ({ ...prev, swing: Math.max(0, Math.min(100, swing)) }));
  }, []);

  const setSound = useCallback((sound: ClickSound) => {
    setState((prev) => ({ ...prev, sound }));
    engineRef.current?.setSound(sound);
  }, []);

  const setMuted = useCallback((muted: boolean) => {
    setState((prev) => ({ ...prev, muted }));
    engineRef.current?.setMuted(muted);
  }, []);

  const setAutoSpeedUp = useCallback((on: boolean) => {
    setState((prev) => ({ ...prev, autoSpeedUp: on }));
    barCountRef.current = 0;
  }, []);

  const setAutoSpeedBars = useCallback((bars: number) => {
    setState((prev) => ({ ...prev, autoSpeedBars: bars }));
  }, []);

  const setAutoSpeedIncrement = useCallback((inc: number) => {
    setState((prev) => ({ ...prev, autoSpeedIncrement: inc }));
  }, []);

  // When timeSig or subdivision changes, restart if playing
  useEffect(() => {
    if (engineRef.current?.isPlaying) {
      restart();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.timeSig, state.subdivision, state.swing]);

  return {
    state,
    togglePlay,
    setBpm,
    setTimeSig,
    setSubdivision,
    setSwing,
    setSound,
    setMuted,
    setAutoSpeedUp,
    setAutoSpeedBars,
    setAutoSpeedIncrement,
  };
}
