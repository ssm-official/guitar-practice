"use client";

import { usePracticeTimer, type TimerDuration } from "@/hooks/usePracticeTimer";

const DURATIONS: TimerDuration[] = [5, 10, 15, 30];

export function PracticeTimer() {
  const { remaining, isRunning, start, stop, formatTime } = usePracticeTimer();

  return (
    <div className="w-full max-w-md">
      <label className="block text-xs text-zinc-500 uppercase tracking-wider mb-2">Practice Timer</label>
      {isRunning ? (
        <div className="flex items-center gap-4">
          <span className="text-2xl font-mono font-bold text-cyan-400">{formatTime(remaining)}</span>
          <button
            onClick={stop}
            className="px-4 py-2 rounded-lg text-sm font-medium bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
          >
            Cancel
          </button>
        </div>
      ) : (
        <div className="flex gap-2">
          {DURATIONS.map((d) => (
            <button
              key={d}
              onClick={() => start(d)}
              className="px-4 py-2 rounded-lg text-sm font-medium bg-zinc-800 text-zinc-300 hover:bg-zinc-700 transition-colors"
            >
              {d}m
            </button>
          ))}
        </div>
      )}
      {remaining === 0 && isRunning === false && (
        <div className="hidden" /> // placeholder, no extra UI needed
      )}
    </div>
  );
}
