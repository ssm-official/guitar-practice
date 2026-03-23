"use client";

import { useState } from "react";
import type { Preset } from "@/hooks/usePresets";
import type { MetronomeState } from "@/hooks/useMetronome";

interface Props {
  presets: Preset[];
  currentState: MetronomeState;
  onSave: (preset: Omit<Preset, "id">) => void;
  onLoad: (preset: Preset) => void;
  onRemove: (id: string) => void;
}

export function Presets({ presets, currentState, onSave, onLoad, onRemove }: Props) {
  const [naming, setNaming] = useState(false);
  const [name, setName] = useState("");

  const handleSave = () => {
    if (!name.trim()) return;
    onSave({
      name: name.trim(),
      bpm: currentState.bpm,
      timeSig: currentState.timeSig,
      subdivision: currentState.subdivision,
      swing: currentState.swing,
      sound: currentState.sound,
    });
    setName("");
    setNaming(false);
  };

  return (
    <div className="w-full max-w-md">
      <div className="flex items-center justify-between mb-2">
        <label className="text-xs text-zinc-500 uppercase tracking-wider">Presets</label>
        {!naming && (
          <button
            onClick={() => setNaming(true)}
            className="text-xs text-cyan-500 hover:text-cyan-400"
          >
            + Save Current
          </button>
        )}
      </div>

      {naming && (
        <div className="flex gap-2 mb-3">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSave()}
            placeholder="Preset name..."
            className="flex-1 bg-zinc-800 text-zinc-200 rounded-lg px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-cyan-500"
            autoFocus
          />
          <button onClick={handleSave} className="px-3 py-2 rounded-lg text-sm font-medium bg-cyan-500 text-zinc-950">
            Save
          </button>
          <button onClick={() => setNaming(false)} className="px-3 py-2 rounded-lg text-sm font-medium bg-zinc-800 text-zinc-400">
            Cancel
          </button>
        </div>
      )}

      {presets.length > 0 && (
        <div className="space-y-1">
          {presets.map((p) => (
            <div key={p.id} className="flex items-center justify-between bg-zinc-900 rounded-lg px-3 py-2 group">
              <button
                onClick={() => onLoad(p)}
                className="text-sm text-zinc-300 hover:text-white text-left flex-1"
              >
                <span className="font-medium">{p.name}</span>
                <span className="text-zinc-500 ml-2">{p.bpm} BPM &middot; {p.timeSig} &middot; {p.subdivision}</span>
              </button>
              <button
                onClick={() => onRemove(p.id)}
                className="text-zinc-600 hover:text-red-400 text-xs opacity-0 group-hover:opacity-100 transition-opacity ml-2"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}

      {presets.length === 0 && !naming && (
        <p className="text-xs text-zinc-600">No presets saved yet.</p>
      )}
    </div>
  );
}
