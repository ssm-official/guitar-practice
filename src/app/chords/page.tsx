"use client";

import { useState } from "react";
import { CHORDS } from "@/lib/chords";
import { ChordDiagram } from "@/components/ChordDiagram";
import { Nav } from "@/components/Nav";

export default function ChordsPage() {
  const categories = [...new Set(CHORDS.map((c) => c.category))];
  const [filter, setFilter] = useState<string | null>(null);

  const filtered = filter ? CHORDS.filter((c) => c.category === filter) : CHORDS;

  return (
    <main className="flex flex-col items-center px-4 py-8 sm:py-16 gap-8 max-w-4xl mx-auto">
      <Nav />
      <h1 className="text-2xl font-bold text-white tracking-tight">Chord Library</h1>

      {/* Category filter */}
      <div className="flex gap-2 flex-wrap justify-center">
        <button
          onClick={() => setFilter(null)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            filter === null ? "bg-cyan-500 text-zinc-950" : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors capitalize ${
              filter === cat ? "bg-cyan-500 text-zinc-950" : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Chord grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {filtered.map((chord) => (
          <div
            key={chord.name}
            className="bg-zinc-900 rounded-xl p-4 flex flex-col items-center hover:bg-zinc-800/80 transition-colors"
          >
            <ChordDiagram chord={chord} />
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-zinc-500 text-sm">No chords in this category yet.</p>
      )}

      <p className="text-xs text-zinc-600 text-center pt-4">
        {CHORDS.length} chords in library
      </p>
    </main>
  );
}
