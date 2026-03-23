"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export type TimerDuration = 5 | 10 | 15 | 30 | null;

export function usePracticeTimer() {
  const [duration, setDuration] = useState<TimerDuration>(null);
  const [remaining, setRemaining] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const start = useCallback((mins: TimerDuration) => {
    if (!mins) return;
    setDuration(mins);
    setRemaining(mins * 60);
    setIsRunning(true);
  }, []);

  const stop = useCallback(() => {
    setIsRunning(false);
    setDuration(null);
    setRemaining(0);
  }, []);

  useEffect(() => {
    if (isRunning && remaining > 0) {
      intervalRef.current = setInterval(() => {
        setRemaining((prev) => {
          if (prev <= 1) {
            setIsRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning, remaining]);

  const formatTime = useCallback((secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  }, []);

  return { duration, remaining, isRunning, start, stop, formatTime };
}
