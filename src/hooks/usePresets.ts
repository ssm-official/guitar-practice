"use client";

import { useCallback, useEffect, useState } from "react";
import type { MetronomeState } from "./useMetronome";

export interface Preset {
  id: string;
  name: string;
  bpm: number;
  timeSig: MetronomeState["timeSig"];
  subdivision: MetronomeState["subdivision"];
  swing: number;
  sound: MetronomeState["sound"];
}

const STORAGE_KEY = "guitar-practice-presets";

function loadPresets(): Preset[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function savePresets(presets: Preset[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(presets));
}

export function usePresets() {
  const [presets, setPresets] = useState<Preset[]>([]);

  useEffect(() => {
    setPresets(loadPresets());
  }, []);

  const addPreset = useCallback((preset: Omit<Preset, "id">) => {
    setPresets((prev) => {
      const next = [...prev, { ...preset, id: crypto.randomUUID() }];
      savePresets(next);
      return next;
    });
  }, []);

  const removePreset = useCallback((id: string) => {
    setPresets((prev) => {
      const next = prev.filter((p) => p.id !== id);
      savePresets(next);
      return next;
    });
  }, []);

  return { presets, addPreset, removePreset };
}
