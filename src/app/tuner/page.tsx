"use client";

import { Nav } from "@/components/Nav";
import { useTuner } from "@/hooks/useTuner";
import { GUITAR_STRINGS } from "@/lib/tuner";

function CentsGauge({ cents }: { cents: number }) {
  // -50 to +50 mapped to gauge position
  const pct = ((cents + 50) / 100) * 100;
  const inTune = Math.abs(cents) <= 5;
  const color = inTune ? "bg-green-400" : Math.abs(cents) <= 15 ? "bg-yellow-400" : "bg-red-400";

  return (
    <div className="w-full max-w-xs space-y-2">
      {/* Gauge track */}
      <div className="relative h-3 bg-zinc-800 rounded-full overflow-hidden">
        {/* Center marker */}
        <div className="absolute left-1/2 top-0 w-0.5 h-full bg-zinc-500 -translate-x-1/2 z-10" />
        {/* Needle */}
        <div
          className={`absolute top-0 h-full w-2 rounded-full ${color} transition-all duration-100 -translate-x-1/2`}
          style={{ left: `${pct}%` }}
        />
      </div>
      {/* Labels */}
      <div className="flex justify-between text-xs text-zinc-600">
        <span>Flat</span>
        <span className={inTune ? "text-green-400 font-bold" : "text-zinc-500"}>
          {inTune ? "In Tune" : `${cents > 0 ? "+" : ""}${cents}c`}
        </span>
        <span>Sharp</span>
      </div>
    </div>
  );
}

export default function TunerPage() {
  const { active, pitch, error, start, stop } = useTuner();

  return (
    <main className="flex flex-col items-center px-4 py-8 sm:py-16 gap-8 max-w-lg mx-auto">
      <Nav />
      <h1 className="text-2xl font-bold text-white tracking-tight">Guitar Tuner</h1>

      {/* Start/Stop */}
      <button
        onClick={active ? stop : start}
        className={`px-8 py-3 rounded-xl text-lg font-bold transition-colors ${
          active
            ? "bg-red-500 hover:bg-red-600 text-white"
            : "bg-cyan-500 hover:bg-cyan-400 text-zinc-950"
        }`}
      >
        {active ? "Stop" : "Start Tuner"}
      </button>

      {error && <p className="text-red-400 text-sm text-center">{error}</p>}

      {/* Pitch display */}
      {active && (
        <div className="flex flex-col items-center gap-6 w-full">
          {pitch ? (
            <>
              {/* Detected note */}
              <div className="text-center">
                <div className="text-7xl font-bold text-white">
                  {pitch.note}
                  <span className="text-3xl text-zinc-500 ml-1">{pitch.octave}</span>
                </div>
                <div className="text-sm text-zinc-500 mt-1">
                  {pitch.frequency.toFixed(1)} Hz
                </div>
              </div>

              {/* Cents gauge */}
              <CentsGauge cents={pitch.cents} />

              {/* Closest string indicator */}
              {pitch.closestString && (
                <div className="text-sm text-zinc-400">
                  Closest string:{" "}
                  <span className="text-cyan-400 font-medium">
                    {pitch.closestString.name} ({pitch.closestString.note})
                  </span>
                </div>
              )}
            </>
          ) : (
            <div className="text-zinc-500 text-lg">Play a string...</div>
          )}
        </div>
      )}

      {/* Reference strings */}
      <div className="w-full max-w-xs">
        <label className="block text-xs text-zinc-500 uppercase tracking-wider mb-3">
          Standard Tuning
        </label>
        <div className="grid grid-cols-6 gap-2">
          {GUITAR_STRINGS.map((s) => {
            const isActive =
              active && pitch?.closestString?.note === s.note && Math.abs(pitch.cents) <= 15;
            const inTune =
              active && pitch?.closestString?.note === s.note && Math.abs(pitch.cents) <= 5;
            return (
              <div
                key={s.note}
                className={`flex flex-col items-center py-3 rounded-xl transition-colors ${
                  inTune
                    ? "bg-green-500/20 ring-1 ring-green-500"
                    : isActive
                      ? "bg-cyan-500/10 ring-1 ring-cyan-500/50"
                      : "bg-zinc-900"
                }`}
              >
                <span className="text-lg font-bold text-white">{s.name}</span>
                <span className="text-[10px] text-zinc-500">{s.freq.toFixed(0)}Hz</span>
                <span className="text-[10px] text-zinc-600">{s.label}</span>
              </div>
            );
          })}
        </div>
      </div>

      <p className="text-xs text-zinc-600 text-center">
        Uses your microphone to detect pitch. Works best in a quiet room.
      </p>
    </main>
  );
}
