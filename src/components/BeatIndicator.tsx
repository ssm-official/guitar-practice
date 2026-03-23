"use client";

import { getBeatsPerBar, type TimeSignature } from "@/lib/audio";

interface Props {
  timeSig: TimeSignature;
  currentBeat: number;
  isPlaying: boolean;
}

export function BeatIndicator({ timeSig, currentBeat, isPlaying }: Props) {
  const beats = getBeatsPerBar(timeSig);

  return (
    <div className="flex items-center justify-center gap-3">
      {Array.from({ length: beats }, (_, i) => {
        const isActive = isPlaying && currentBeat === i;
        const isFirst = i === 0;

        return (
          <div
            key={i}
            className={`
              rounded-full transition-all duration-75
              ${isFirst ? "w-14 h-14" : "w-11 h-11"}
              ${
                isActive
                  ? isFirst
                    ? "bg-orange-400 shadow-[0_0_20px_rgba(251,146,60,0.6)] scale-110"
                    : "bg-cyan-400 shadow-[0_0_16px_rgba(34,211,238,0.5)] scale-105"
                  : "bg-zinc-800 border border-zinc-700"
              }
            `}
          />
        );
      })}
    </div>
  );
}
