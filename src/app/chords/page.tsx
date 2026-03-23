"use client";

import { useState, useMemo } from "react";
import { CHORDS } from "@/lib/chords";
import { ChordDiagram } from "@/components/ChordDiagram";
import { Nav } from "@/components/Nav";

export default function ChordsPage() {
  const categories = useMemo(() => [...new Set(CHORDS.map((c) => c.category))], []);
  const [filter, setFilter] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    let results = CHORDS;
    if (filter) results = results.filter((c) => c.category === filter);
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      results = results.filter(
        (c) => c.name.toLowerCase().includes(q) || c.fullName.toLowerCase().includes(q),
      );
    }
    return results;
  }, [filter, search]);

  return (
    <main className="flex flex-col items-center px-4 py-8 sm:py-16 gap-6 max-w-5xl mx-auto">
      <Nav />
      <h1 className="text-2xl font-bold text-white tracking-tight">Chord Library</h1>

      {/* Search */}
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search chords... (e.g. Am7, sus4, diminished)"
        className="w-full max-w-md bg-zinc-900 text-zinc-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-cyan-500 placeholder:text-zinc-600"
      />

      {/* Category filter */}
      <div className="flex gap-1.5 flex-wrap justify-center max-w-3xl">
        <button
          onClick={() => setFilter(null)}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
            filter === null ? "bg-cyan-500 text-zinc-950" : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
          }`}
        >
          All ({CHORDS.length})
        </button>
        {categories.map((cat) => {
          const count = CHORDS.filter((c) => c.category === cat).length;
          return (
            <button
              key={cat}
              onClick={() => setFilter(filter === cat ? null : cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors capitalize ${
                filter === cat ? "bg-cyan-500 text-zinc-950" : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
              }`}
            >
              {cat} ({count})
            </button>
          );
        })}
      </div>

      {/* Chord grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full">
        {filtered.map((chord, i) => (
          <div
            key={`${chord.name}-${i}`}
            className="bg-zinc-900 rounded-xl p-3 flex flex-col items-center hover:bg-zinc-800/80 transition-colors"
          >
            <ChordDiagram chord={chord} />
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-zinc-500 text-sm">No chords match your search.</p>
      )}

      <p className="text-xs text-zinc-600 text-center pt-2">
        Showing {filtered.length} of {CHORDS.length} chords
      </p>
    </main>
  );
}
