"use client";

import { useCallback, useRef } from "react";

export function useTapTempo(onBpmChange: (bpm: number) => void) {
  const tapsRef = useRef<number[]>([]);

  const tap = useCallback(() => {
    const now = performance.now();
    const taps = tapsRef.current;

    // Reset if last tap was more than 2 seconds ago
    if (taps.length > 0 && now - taps[taps.length - 1] > 2000) {
      taps.length = 0;
    }

    taps.push(now);

    // Keep last 6 taps
    if (taps.length > 6) taps.shift();

    if (taps.length >= 2) {
      const intervals: number[] = [];
      for (let i = 1; i < taps.length; i++) {
        intervals.push(taps[i] - taps[i - 1]);
      }
      const avg = intervals.reduce((a, b) => a + b, 0) / intervals.length;
      const bpm = Math.round(60000 / avg);
      onBpmChange(Math.max(30, Math.min(240, bpm)));
    }
  }, [onBpmChange]);

  return { tap };
}
