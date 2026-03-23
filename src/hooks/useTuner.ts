"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { detectPitch, frequencyToNote, type PitchResult } from "@/lib/tuner";

export function useTuner() {
  const [active, setActive] = useState(false);
  const [pitch, setPitch] = useState<PitchResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const audioCtxRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const rafRef = useRef<number>(0);

  const analyze = useCallback(() => {
    const analyser = analyserRef.current;
    const ctx = audioCtxRef.current;
    if (!analyser || !ctx) return;

    const buffer = new Float32Array(analyser.fftSize);
    analyser.getFloatTimeDomainData(buffer);

    const freq = detectPitch(buffer, ctx.sampleRate);
    if (freq) {
      setPitch(frequencyToNote(freq));
    }

    rafRef.current = requestAnimationFrame(analyze);
  }, []);

  const start = useCallback(async () => {
    try {
      setError(null);
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;

      const ctx = new AudioContext();
      audioCtxRef.current = ctx;

      const source = ctx.createMediaStreamSource(stream);
      const analyser = ctx.createAnalyser();
      analyser.fftSize = 4096;
      source.connect(analyser);
      analyserRef.current = analyser;

      setActive(true);
      rafRef.current = requestAnimationFrame(analyze);
    } catch {
      setError("Microphone access denied. Please allow mic access to use the tuner.");
    }
  }, [analyze]);

  const stop = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    streamRef.current?.getTracks().forEach((t) => t.stop());
    audioCtxRef.current?.close();
    audioCtxRef.current = null;
    analyserRef.current = null;
    streamRef.current = null;
    setActive(false);
    setPitch(null);
  }, []);

  useEffect(() => {
    return () => {
      cancelAnimationFrame(rafRef.current);
      streamRef.current?.getTracks().forEach((t) => t.stop());
      audioCtxRef.current?.close();
    };
  }, []);

  return { active, pitch, error, start, stop };
}
