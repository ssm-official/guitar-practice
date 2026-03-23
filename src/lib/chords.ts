export interface ChordFinger {
  string: number;  // 1 (high E) to 6 (low E)
  fret: number;    // 1-based fret number relative to startFret
  finger?: number; // 1=index, 2=middle, 3=ring, 4=pinky, 0=thumb
}

export interface Barre {
  fret: number;      // fret number relative to startFret
  fromString: number; // lowest string (6=low E)
  toString: number;   // highest string (1=high E)
  finger?: number;
}

export interface ChordData {
  name: string;        // e.g. "C", "Am7", "F#m"
  fullName: string;    // e.g. "C Major", "A Minor 7th"
  category: string;    // "major" | "minor" | "7th" | "maj7" | "min7" | "sus" | "dim" | "aug" | etc.
  startFret: number;   // 1 = open position, >1 = show fret number label
  fingers: ChordFinger[];
  barres: Barre[];
  muted: number[];     // strings that are muted (not played), 1-6
  open: number[];      // strings that are open, 1-6
}

// ── Starter chords (5) ──────────────────────────────────────────

export const CHORDS: ChordData[] = [
  {
    name: "C",
    fullName: "C Major",
    category: "major",
    startFret: 1,
    fingers: [
      { string: 2, fret: 1, finger: 1 },
      { string: 4, fret: 2, finger: 2 },
      { string: 5, fret: 3, finger: 3 },
    ],
    barres: [],
    muted: [6],
    open: [1, 3],
  },
  {
    name: "G",
    fullName: "G Major",
    category: "major",
    startFret: 1,
    fingers: [
      { string: 5, fret: 2, finger: 1 },
      { string: 6, fret: 3, finger: 2 },
      { string: 1, fret: 3, finger: 3 },
    ],
    barres: [],
    muted: [],
    open: [2, 3, 4],
  },
  {
    name: "D",
    fullName: "D Major",
    category: "major",
    startFret: 1,
    fingers: [
      { string: 3, fret: 2, finger: 1 },
      { string: 1, fret: 2, finger: 2 },
      { string: 2, fret: 3, finger: 3 },
    ],
    barres: [],
    muted: [5, 6],
    open: [4],
  },
  {
    name: "Am",
    fullName: "A Minor",
    category: "minor",
    startFret: 1,
    fingers: [
      { string: 2, fret: 1, finger: 1 },
      { string: 4, fret: 2, finger: 2 },
      { string: 3, fret: 2, finger: 3 },
    ],
    barres: [],
    muted: [6],
    open: [1, 5],
  },
  {
    name: "Em",
    fullName: "E Minor",
    category: "minor",
    startFret: 1,
    fingers: [
      { string: 5, fret: 2, finger: 2 },
      { string: 4, fret: 2, finger: 3 },
    ],
    barres: [],
    muted: [],
    open: [1, 2, 3, 6],
  },
];
