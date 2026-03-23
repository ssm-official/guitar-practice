"use client";

import { useEffect, useCallback } from "react";
import { useMetronome } from "@/hooks/useMetronome";
import { useTapTempo } from "@/hooks/useTapTempo";
import { usePresets, type Preset } from "@/hooks/usePresets";
import { BeatIndicator } from "@/components/BeatIndicator";
import { Controls } from "@/components/Controls";
import { PracticeTimer } from "@/components/PracticeTimer";
import { Presets } from "@/components/Presets";
import { Nav } from "@/components/Nav";

export default function Home() {
  const {
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
  } = useMetronome();

  const { tap } = useTapTempo(setBpm);
  const { presets, addPreset, removePreset } = usePresets();

  const loadPreset = useCallback(
    (p: Preset) => {
      setBpm(p.bpm);
      setTimeSig(p.timeSig);
      setSubdivision(p.subdivision);
      setSwing(p.swing);
      setSound(p.sound);
    },
    [setBpm, setTimeSig, setSubdivision, setSwing, setSound],
  );

  // Keyboard shortcuts
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      // Ignore if typing in an input
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      switch (e.code) {
        case "Space":
          e.preventDefault();
          togglePlay();
          break;
        case "KeyT":
          e.preventDefault();
          tap();
          break;
        case "ArrowUp":
          e.preventDefault();
          setBpm(state.bpm + (e.shiftKey ? 10 : 1));
          break;
        case "ArrowDown":
          e.preventDefault();
          setBpm(state.bpm - (e.shiftKey ? 10 : 1));
          break;
        case "KeyM":
          e.preventDefault();
          setMuted(!state.muted);
          break;
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [togglePlay, tap, setBpm, setMuted, state.bpm, state.muted]);

  return (
    <main className="flex flex-col items-center px-4 py-8 sm:py-16 gap-8 max-w-lg mx-auto">
      <Nav />
      <h1 className="text-2xl font-bold text-white tracking-tight">Guitar Practice</h1>

      {/* Beat Indicator */}
      <div className="py-6">
        <BeatIndicator
          timeSig={state.timeSig}
          currentBeat={state.currentBeat}
          isPlaying={state.isPlaying}
        />
      </div>

      {/* Controls */}
      <Controls
        bpm={state.bpm}
        timeSig={state.timeSig}
        subdivision={state.subdivision}
        swing={state.swing}
        sound={state.sound}
        muted={state.muted}
        isPlaying={state.isPlaying}
        autoSpeedUp={state.autoSpeedUp}
        autoSpeedBars={state.autoSpeedBars}
        autoSpeedIncrement={state.autoSpeedIncrement}
        onBpmChange={setBpm}
        onTimeSigChange={setTimeSig}
        onSubdivisionChange={setSubdivision}
        onSwingChange={setSwing}
        onSoundChange={setSound}
        onMutedChange={setMuted}
        onTogglePlay={togglePlay}
        onTap={tap}
        onAutoSpeedUpChange={setAutoSpeedUp}
        onAutoSpeedBarsChange={setAutoSpeedBars}
        onAutoSpeedIncrementChange={setAutoSpeedIncrement}
      />

      {/* Practice Timer */}
      <PracticeTimer />

      {/* Presets */}
      <Presets
        presets={presets}
        currentState={state}
        onSave={addPreset}
        onLoad={loadPreset}
        onRemove={removePreset}
      />

      {/* Keyboard Shortcuts */}
      <div className="text-xs text-zinc-600 text-center space-y-0.5 pt-4">
        <p>Space: Start/Stop &middot; T: Tap Tempo &middot; M: Mute</p>
        <p>Arrow Up/Down: BPM +/-1 &middot; Shift+Arrow: +/-10</p>
      </div>
    </main>
  );
}
