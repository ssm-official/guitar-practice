export interface ChordFinger {
  string: number;  // 1 (high E) to 6 (low E)
  fret: number;    // 1-based fret number relative to startFret
  finger?: number; // 1=index, 2=middle, 3=ring, 4=pinky, 0=thumb
}

export interface Barre {
  fret: number;
  fromString: number;
  toString: number;
  finger?: number;
}

export interface ChordData {
  name: string;
  fullName: string;
  category: string;
  startFret: number;
  fingers: ChordFinger[];
  barres: Barre[];
  muted: number[];
  open: number[];
}

export const CHORDS: ChordData[] = [
  // ============================================================
  // MAJOR CHORDS
  // ============================================================
  { name: "C", fullName: "C Major", category: "major", startFret: 1, fingers: [{ string: 2, fret: 1, finger: 1 }, { string: 4, fret: 2, finger: 2 }, { string: 5, fret: 3, finger: 3 }], barres: [], muted: [6], open: [1, 3] },
  { name: "D", fullName: "D Major", category: "major", startFret: 1, fingers: [{ string: 3, fret: 2, finger: 1 }, { string: 1, fret: 2, finger: 2 }, { string: 2, fret: 3, finger: 3 }], barres: [], muted: [5, 6], open: [4] },
  { name: "E", fullName: "E Major", category: "major", startFret: 1, fingers: [{ string: 3, fret: 1, finger: 1 }, { string: 5, fret: 2, finger: 2 }, { string: 4, fret: 2, finger: 3 }], barres: [], muted: [], open: [1, 2, 6] },
  { name: "F", fullName: "F Major", category: "major", startFret: 1, fingers: [{ string: 4, fret: 2, finger: 2 }, { string: 5, fret: 3, finger: 3 }, { string: 4, fret: 3, finger: 4 }], barres: [{ fret: 1, fromString: 6, toString: 1, finger: 1 }], muted: [], open: [] },
  { name: "G", fullName: "G Major", category: "major", startFret: 1, fingers: [{ string: 5, fret: 2, finger: 1 }, { string: 6, fret: 3, finger: 2 }, { string: 1, fret: 3, finger: 3 }], barres: [], muted: [], open: [2, 3, 4] },
  { name: "A", fullName: "A Major", category: "major", startFret: 1, fingers: [{ string: 4, fret: 2, finger: 1 }, { string: 3, fret: 2, finger: 2 }, { string: 2, fret: 2, finger: 3 }], barres: [], muted: [6], open: [1, 5] },
  { name: "B", fullName: "B Major", category: "major", startFret: 2, fingers: [{ string: 4, fret: 3, finger: 2 }, { string: 3, fret: 3, finger: 3 }, { string: 2, fret: 3, finger: 4 }], barres: [{ fret: 1, fromString: 5, toString: 1, finger: 1 }], muted: [6], open: [] },
  { name: "Db", fullName: "Db Major", category: "major", startFret: 4, fingers: [{ string: 4, fret: 2, finger: 2 }, { string: 3, fret: 2, finger: 3 }, { string: 2, fret: 2, finger: 4 }], barres: [{ fret: 1, fromString: 5, toString: 1, finger: 1 }], muted: [6], open: [] },
  { name: "Eb", fullName: "Eb Major", category: "major", startFret: 6, fingers: [{ string: 4, fret: 2, finger: 2 }, { string: 3, fret: 2, finger: 3 }, { string: 2, fret: 2, finger: 4 }], barres: [{ fret: 1, fromString: 5, toString: 1, finger: 1 }], muted: [6], open: [] },
  { name: "F#", fullName: "F# Major", category: "major", startFret: 2, fingers: [{ string: 5, fret: 3, finger: 3 }, { string: 4, fret: 3, finger: 4 }], barres: [{ fret: 1, fromString: 6, toString: 1, finger: 1 }], muted: [], open: [] },
  { name: "Ab", fullName: "Ab Major", category: "major", startFret: 4, fingers: [{ string: 5, fret: 3, finger: 3 }, { string: 4, fret: 3, finger: 4 }], barres: [{ fret: 1, fromString: 6, toString: 1, finger: 1 }], muted: [], open: [] },
  { name: "Bb", fullName: "Bb Major", category: "major", startFret: 1, fingers: [{ string: 4, fret: 3, finger: 2 }, { string: 3, fret: 3, finger: 3 }, { string: 2, fret: 3, finger: 4 }], barres: [{ fret: 1, fromString: 5, toString: 1, finger: 1 }], muted: [6], open: [] },

  // ============================================================
  // MINOR CHORDS
  // ============================================================
  { name: "Cm", fullName: "C Minor", category: "minor", startFret: 3, fingers: [{ string: 4, fret: 2, finger: 2 }, { string: 2, fret: 2, finger: 3 }], barres: [{ fret: 1, fromString: 5, toString: 1, finger: 1 }], muted: [6], open: [] },
  { name: "Dm", fullName: "D Minor", category: "minor", startFret: 1, fingers: [{ string: 3, fret: 2, finger: 2 }, { string: 2, fret: 3, finger: 3 }, { string: 1, fret: 1, finger: 1 }], barres: [], muted: [5, 6], open: [4] },
  { name: "Em", fullName: "E Minor", category: "minor", startFret: 1, fingers: [{ string: 5, fret: 2, finger: 2 }, { string: 4, fret: 2, finger: 3 }], barres: [], muted: [], open: [1, 2, 3, 6] },
  { name: "Fm", fullName: "F Minor", category: "minor", startFret: 1, fingers: [{ string: 5, fret: 3, finger: 3 }, { string: 4, fret: 3, finger: 4 }], barres: [{ fret: 1, fromString: 6, toString: 1, finger: 1 }], muted: [], open: [] },
  { name: "Gm", fullName: "G Minor", category: "minor", startFret: 3, fingers: [{ string: 5, fret: 3, finger: 3 }, { string: 4, fret: 3, finger: 4 }], barres: [{ fret: 1, fromString: 6, toString: 1, finger: 1 }], muted: [], open: [] },
  { name: "Am", fullName: "A Minor", category: "minor", startFret: 1, fingers: [{ string: 2, fret: 1, finger: 1 }, { string: 4, fret: 2, finger: 2 }, { string: 3, fret: 2, finger: 3 }], barres: [], muted: [6], open: [1, 5] },
  { name: "Bm", fullName: "B Minor", category: "minor", startFret: 2, fingers: [{ string: 4, fret: 3, finger: 3 }, { string: 2, fret: 2, finger: 2 }], barres: [{ fret: 1, fromString: 5, toString: 1, finger: 1 }], muted: [6], open: [] },
  { name: "C#m", fullName: "C# Minor", category: "minor", startFret: 4, fingers: [{ string: 4, fret: 3, finger: 3 }, { string: 2, fret: 2, finger: 2 }], barres: [{ fret: 1, fromString: 5, toString: 1, finger: 1 }], muted: [6], open: [] },
  { name: "Ebm", fullName: "Eb Minor", category: "minor", startFret: 6, fingers: [{ string: 4, fret: 3, finger: 3 }, { string: 2, fret: 2, finger: 2 }], barres: [{ fret: 1, fromString: 5, toString: 1, finger: 1 }], muted: [6], open: [] },
  { name: "F#m", fullName: "F# Minor", category: "minor", startFret: 2, fingers: [{ string: 5, fret: 3, finger: 3 }, { string: 4, fret: 3, finger: 4 }], barres: [{ fret: 1, fromString: 6, toString: 1, finger: 1 }], muted: [], open: [] },
  { name: "G#m", fullName: "G# Minor", category: "minor", startFret: 4, fingers: [{ string: 5, fret: 3, finger: 3 }, { string: 4, fret: 3, finger: 4 }], barres: [{ fret: 1, fromString: 6, toString: 1, finger: 1 }], muted: [], open: [] },
  { name: "Bbm", fullName: "Bb Minor", category: "minor", startFret: 1, fingers: [{ string: 4, fret: 2, finger: 2 }, { string: 2, fret: 2, finger: 3 }], barres: [{ fret: 1, fromString: 5, toString: 1, finger: 1 }], muted: [6], open: [] },

  // ============================================================
  // DOMINANT 7TH CHORDS
  // ============================================================
  { name: "C7", fullName: "C Dominant 7th", category: "7th", startFret: 1, fingers: [{ string: 2, fret: 1, finger: 1 }, { string: 4, fret: 2, finger: 2 }, { string: 5, fret: 3, finger: 3 }, { string: 3, fret: 3, finger: 4 }], barres: [], muted: [6], open: [1] },
  { name: "D7", fullName: "D Dominant 7th", category: "7th", startFret: 1, fingers: [{ string: 3, fret: 2, finger: 2 }, { string: 1, fret: 2, finger: 3 }, { string: 2, fret: 1, finger: 1 }], barres: [], muted: [5, 6], open: [4] },
  { name: "E7", fullName: "E Dominant 7th", category: "7th", startFret: 1, fingers: [{ string: 3, fret: 1, finger: 1 }, { string: 5, fret: 2, finger: 2 }], barres: [], muted: [], open: [1, 2, 4, 6] },
  { name: "F7", fullName: "F Dominant 7th", category: "7th", startFret: 1, fingers: [{ string: 4, fret: 2, finger: 2 }, { string: 5, fret: 3, finger: 3 }], barres: [{ fret: 1, fromString: 6, toString: 1, finger: 1 }], muted: [], open: [] },
  { name: "G7", fullName: "G Dominant 7th", category: "7th", startFret: 1, fingers: [{ string: 6, fret: 3, finger: 3 }, { string: 5, fret: 2, finger: 2 }, { string: 1, fret: 1, finger: 1 }], barres: [], muted: [], open: [2, 3, 4] },
  { name: "A7", fullName: "A Dominant 7th", category: "7th", startFret: 1, fingers: [{ string: 4, fret: 2, finger: 2 }, { string: 2, fret: 2, finger: 3 }], barres: [], muted: [6], open: [1, 3, 5] },
  { name: "B7", fullName: "B Dominant 7th", category: "7th", startFret: 1, fingers: [{ string: 5, fret: 2, finger: 1 }, { string: 4, fret: 1, finger: 2 }, { string: 3, fret: 2, finger: 3 }, { string: 1, fret: 2, finger: 4 }], barres: [], muted: [6], open: [2] },
  { name: "Db7", fullName: "Db Dominant 7th", category: "7th", startFret: 4, fingers: [{ string: 4, fret: 2, finger: 2 }, { string: 5, fret: 3, finger: 3 }], barres: [{ fret: 1, fromString: 6, toString: 1, finger: 1 }], muted: [], open: [] },
  { name: "Eb7", fullName: "Eb Dominant 7th", category: "7th", startFret: 6, fingers: [{ string: 4, fret: 2, finger: 2 }, { string: 5, fret: 3, finger: 3 }], barres: [{ fret: 1, fromString: 6, toString: 1, finger: 1 }], muted: [], open: [] },
  { name: "F#7", fullName: "F# Dominant 7th", category: "7th", startFret: 2, fingers: [{ string: 4, fret: 2, finger: 2 }, { string: 5, fret: 3, finger: 3 }], barres: [{ fret: 1, fromString: 6, toString: 1, finger: 1 }], muted: [], open: [] },
  { name: "Ab7", fullName: "Ab Dominant 7th", category: "7th", startFret: 4, fingers: [{ string: 4, fret: 2, finger: 2 }, { string: 2, fret: 3, finger: 3 }], barres: [{ fret: 1, fromString: 5, toString: 1, finger: 1 }], muted: [6], open: [] },
  { name: "Bb7", fullName: "Bb Dominant 7th", category: "7th", startFret: 1, fingers: [{ string: 4, fret: 3, finger: 3 }, { string: 2, fret: 3, finger: 4 }], barres: [{ fret: 1, fromString: 5, toString: 1, finger: 1 }], muted: [6], open: [] },

  // ============================================================
  // MAJOR 7TH CHORDS
  // ============================================================
  { name: "Cmaj7", fullName: "C Major 7th", category: "maj7", startFret: 1, fingers: [{ string: 4, fret: 2, finger: 2 }, { string: 5, fret: 3, finger: 3 }], barres: [], muted: [6], open: [1, 2, 3] },
  { name: "Dmaj7", fullName: "D Major 7th", category: "maj7", startFret: 1, fingers: [{ string: 3, fret: 2, finger: 1 }, { string: 1, fret: 2, finger: 2 }, { string: 2, fret: 2, finger: 3 }], barres: [], muted: [5, 6], open: [4] },
  { name: "Emaj7", fullName: "E Major 7th", category: "maj7", startFret: 1, fingers: [{ string: 3, fret: 1, finger: 1 }, { string: 4, fret: 2, finger: 3 }, { string: 5, fret: 2, finger: 2 }], barres: [], muted: [], open: [1, 2, 6] },
  { name: "Fmaj7", fullName: "F Major 7th", category: "maj7", startFret: 1, fingers: [{ string: 4, fret: 2, finger: 2 }, { string: 5, fret: 3, finger: 3 }, { string: 3, fret: 2, finger: 4 }], barres: [{ fret: 1, fromString: 2, toString: 1, finger: 1 }], muted: [6], open: [] },
  { name: "Gmaj7", fullName: "G Major 7th", category: "maj7", startFret: 1, fingers: [{ string: 6, fret: 3, finger: 3 }, { string: 5, fret: 2, finger: 1 }, { string: 1, fret: 2, finger: 2 }], barres: [], muted: [], open: [2, 3, 4] },
  { name: "Amaj7", fullName: "A Major 7th", category: "maj7", startFret: 1, fingers: [{ string: 4, fret: 2, finger: 2 }, { string: 3, fret: 1, finger: 1 }, { string: 2, fret: 2, finger: 3 }], barres: [], muted: [6], open: [1, 5] },
  { name: "Bmaj7", fullName: "B Major 7th", category: "maj7", startFret: 2, fingers: [{ string: 4, fret: 3, finger: 2 }, { string: 3, fret: 2, finger: 3 }, { string: 2, fret: 3, finger: 4 }], barres: [{ fret: 1, fromString: 5, toString: 1, finger: 1 }], muted: [6], open: [] },
  { name: "Dbmaj7", fullName: "Db Major 7th", category: "maj7", startFret: 4, fingers: [{ string: 4, fret: 3, finger: 2 }, { string: 3, fret: 2, finger: 3 }, { string: 2, fret: 3, finger: 4 }], barres: [{ fret: 1, fromString: 5, toString: 1, finger: 1 }], muted: [6], open: [] },
  { name: "Ebmaj7", fullName: "Eb Major 7th", category: "maj7", startFret: 6, fingers: [{ string: 4, fret: 3, finger: 2 }, { string: 3, fret: 2, finger: 3 }, { string: 2, fret: 3, finger: 4 }], barres: [{ fret: 1, fromString: 5, toString: 1, finger: 1 }], muted: [6], open: [] },
  { name: "F#maj7", fullName: "F# Major 7th", category: "maj7", startFret: 2, fingers: [{ string: 5, fret: 3, finger: 3 }, { string: 3, fret: 2, finger: 2 }], barres: [{ fret: 1, fromString: 6, toString: 1, finger: 1 }], muted: [], open: [] },
  { name: "Abmaj7", fullName: "Ab Major 7th", category: "maj7", startFret: 4, fingers: [{ string: 5, fret: 3, finger: 3 }, { string: 3, fret: 2, finger: 2 }], barres: [{ fret: 1, fromString: 6, toString: 1, finger: 1 }], muted: [], open: [] },
  { name: "Bbmaj7", fullName: "Bb Major 7th", category: "maj7", startFret: 1, fingers: [{ string: 4, fret: 3, finger: 3 }, { string: 3, fret: 2, finger: 2 }, { string: 2, fret: 3, finger: 4 }], barres: [{ fret: 1, fromString: 5, toString: 1, finger: 1 }], muted: [6], open: [] },

  // ============================================================
  // MINOR 7TH CHORDS
  // ============================================================
  { name: "Cm7", fullName: "C Minor 7th", category: "min7", startFret: 3, fingers: [{ string: 4, fret: 2, finger: 2 }], barres: [{ fret: 1, fromString: 5, toString: 1, finger: 1 }], muted: [6], open: [] },
  { name: "Dm7", fullName: "D Minor 7th", category: "min7", startFret: 1, fingers: [{ string: 1, fret: 1, finger: 1 }, { string: 3, fret: 2, finger: 2 }, { string: 2, fret: 1, finger: 1 }], barres: [], muted: [5, 6], open: [4] },
  { name: "Em7", fullName: "E Minor 7th", category: "min7", startFret: 1, fingers: [{ string: 5, fret: 2, finger: 2 }], barres: [], muted: [], open: [1, 2, 3, 4, 6] },
  { name: "Fm7", fullName: "F Minor 7th", category: "min7", startFret: 1, fingers: [{ string: 5, fret: 3, finger: 3 }], barres: [{ fret: 1, fromString: 6, toString: 1, finger: 1 }], muted: [], open: [] },
  { name: "Gm7", fullName: "G Minor 7th", category: "min7", startFret: 3, fingers: [{ string: 5, fret: 3, finger: 3 }], barres: [{ fret: 1, fromString: 6, toString: 1, finger: 1 }], muted: [], open: [] },
  { name: "Am7", fullName: "A Minor 7th", category: "min7", startFret: 1, fingers: [{ string: 2, fret: 1, finger: 1 }, { string: 4, fret: 2, finger: 2 }], barres: [], muted: [6], open: [1, 3, 5] },
  { name: "Bm7", fullName: "B Minor 7th", category: "min7", startFret: 2, fingers: [{ string: 4, fret: 3, finger: 3 }], barres: [{ fret: 1, fromString: 5, toString: 1, finger: 1 }], muted: [6], open: [] },
  { name: "C#m7", fullName: "C# Minor 7th", category: "min7", startFret: 4, fingers: [{ string: 4, fret: 3, finger: 3 }], barres: [{ fret: 1, fromString: 5, toString: 1, finger: 1 }], muted: [6], open: [] },
  { name: "Ebm7", fullName: "Eb Minor 7th", category: "min7", startFret: 6, fingers: [{ string: 4, fret: 3, finger: 3 }], barres: [{ fret: 1, fromString: 5, toString: 1, finger: 1 }], muted: [6], open: [] },
  { name: "F#m7", fullName: "F# Minor 7th", category: "min7", startFret: 2, fingers: [{ string: 5, fret: 3, finger: 3 }], barres: [{ fret: 1, fromString: 6, toString: 1, finger: 1 }], muted: [], open: [] },
  { name: "G#m7", fullName: "G# Minor 7th", category: "min7", startFret: 4, fingers: [{ string: 5, fret: 3, finger: 3 }], barres: [{ fret: 1, fromString: 6, toString: 1, finger: 1 }], muted: [], open: [] },
  { name: "Bbm7", fullName: "Bb Minor 7th", category: "min7", startFret: 1, fingers: [{ string: 4, fret: 2, finger: 2 }], barres: [{ fret: 1, fromString: 5, toString: 1, finger: 1 }], muted: [6], open: [] },

  // ============================================================
  // SUS2 CHORDS
  // ============================================================
  { name: "Csus2", fullName: "C Suspended 2nd", category: "sus2", startFret: 1, fingers: [{ string: 4, fret: 2, finger: 1 }, { string: 5, fret: 3, finger: 3 }], barres: [], muted: [6], open: [1, 2, 3] },
  { name: "Dsus2", fullName: "D Suspended 2nd", category: "sus2", startFret: 1, fingers: [{ string: 3, fret: 2, finger: 2 }], barres: [], muted: [5, 6], open: [1, 2, 4] },
  { name: "Esus2", fullName: "E Suspended 2nd", category: "sus2", startFret: 1, fingers: [{ string: 5, fret: 2, finger: 1 }, { string: 4, fret: 4, finger: 3 }, { string: 3, fret: 4, finger: 4 }], barres: [], muted: [], open: [1, 2, 6] },
  { name: "Fsus2", fullName: "F Suspended 2nd", category: "sus2", startFret: 1, fingers: [{ string: 5, fret: 3, finger: 3 }, { string: 4, fret: 3, finger: 4 }], barres: [{ fret: 1, fromString: 6, toString: 1, finger: 1 }], muted: [], open: [] },
  { name: "Gsus2", fullName: "G Suspended 2nd", category: "sus2", startFret: 1, fingers: [{ string: 6, fret: 3, finger: 3 }, { string: 5, fret: 2, finger: 1 }, { string: 1, fret: 3, finger: 4 }], barres: [], muted: [], open: [2, 3, 4] },
  { name: "Asus2", fullName: "A Suspended 2nd", category: "sus2", startFret: 1, fingers: [{ string: 4, fret: 2, finger: 1 }, { string: 3, fret: 2, finger: 2 }], barres: [], muted: [6], open: [1, 2, 5] },
  { name: "Bsus2", fullName: "B Suspended 2nd", category: "sus2", startFret: 2, fingers: [{ string: 4, fret: 3, finger: 3 }, { string: 3, fret: 3, finger: 4 }], barres: [{ fret: 1, fromString: 5, toString: 1, finger: 1 }], muted: [6], open: [] },
  { name: "F#sus2", fullName: "F# Suspended 2nd", category: "sus2", startFret: 2, fingers: [{ string: 5, fret: 3, finger: 3 }, { string: 4, fret: 3, finger: 4 }], barres: [{ fret: 1, fromString: 6, toString: 1, finger: 1 }], muted: [], open: [] },
  { name: "Absus2", fullName: "Ab Suspended 2nd", category: "sus2", startFret: 4, fingers: [{ string: 5, fret: 3, finger: 3 }, { string: 4, fret: 3, finger: 4 }], barres: [{ fret: 1, fromString: 6, toString: 1, finger: 1 }], muted: [], open: [] },
  { name: "Bbsus2", fullName: "Bb Suspended 2nd", category: "sus2", startFret: 1, fingers: [{ string: 4, fret: 3, finger: 3 }, { string: 3, fret: 3, finger: 4 }], barres: [{ fret: 1, fromString: 5, toString: 1, finger: 1 }], muted: [6], open: [] },
  { name: "Dbsus2", fullName: "Db Suspended 2nd", category: "sus2", startFret: 4, fingers: [{ string: 4, fret: 3, finger: 3 }, { string: 3, fret: 3, finger: 4 }], barres: [{ fret: 1, fromString: 5, toString: 1, finger: 1 }], muted: [6], open: [] },
  { name: "Ebsus2", fullName: "Eb Suspended 2nd", category: "sus2", startFret: 6, fingers: [{ string: 4, fret: 3, finger: 3 }, { string: 3, fret: 3, finger: 4 }], barres: [{ fret: 1, fromString: 5, toString: 1, finger: 1 }], muted: [6], open: [] },

  // ============================================================
  // SUS4 CHORDS
  // ============================================================
  { name: "Csus4", fullName: "C Suspended 4th", category: "sus4", startFret: 1, fingers: [{ string: 2, fret: 1, finger: 1 }, { string: 4, fret: 3, finger: 3 }, { string: 5, fret: 3, finger: 4 }], barres: [], muted: [6], open: [1, 3] },
  { name: "Dsus4", fullName: "D Suspended 4th", category: "sus4", startFret: 1, fingers: [{ string: 3, fret: 2, finger: 1 }, { string: 1, fret: 3, finger: 3 }, { string: 2, fret: 3, finger: 4 }], barres: [], muted: [5, 6], open: [4] },
  { name: "Esus4", fullName: "E Suspended 4th", category: "sus4", startFret: 1, fingers: [{ string: 4, fret: 2, finger: 2 }, { string: 5, fret: 2, finger: 3 }], barres: [], muted: [], open: [1, 2, 3, 6] },
  { name: "Fsus4", fullName: "F Suspended 4th", category: "sus4", startFret: 1, fingers: [{ string: 4, fret: 3, finger: 3 }, { string: 5, fret: 3, finger: 4 }], barres: [{ fret: 1, fromString: 6, toString: 1, finger: 1 }], muted: [], open: [] },
  { name: "Gsus4", fullName: "G Suspended 4th", category: "sus4", startFret: 1, fingers: [{ string: 6, fret: 3, finger: 2 }, { string: 5, fret: 3, finger: 3 }, { string: 1, fret: 3, finger: 4 }, { string: 2, fret: 1, finger: 1 }], barres: [], muted: [], open: [3, 4] },
  { name: "Asus4", fullName: "A Suspended 4th", category: "sus4", startFret: 1, fingers: [{ string: 4, fret: 2, finger: 1 }, { string: 3, fret: 2, finger: 2 }, { string: 2, fret: 3, finger: 3 }], barres: [], muted: [6], open: [1, 5] },
  { name: "Bsus4", fullName: "B Suspended 4th", category: "sus4", startFret: 2, fingers: [{ string: 4, fret: 3, finger: 2 }, { string: 3, fret: 3, finger: 3 }, { string: 2, fret: 4, finger: 4 }], barres: [{ fret: 1, fromString: 5, toString: 1, finger: 1 }], muted: [6], open: [] },
  { name: "F#sus4", fullName: "F# Suspended 4th", category: "sus4", startFret: 2, fingers: [{ string: 4, fret: 3, finger: 3 }, { string: 5, fret: 3, finger: 4 }], barres: [{ fret: 1, fromString: 6, toString: 1, finger: 1 }], muted: [], open: [] },
  { name: "Absus4", fullName: "Ab Suspended 4th", category: "sus4", startFret: 4, fingers: [{ string: 4, fret: 3, finger: 3 }, { string: 5, fret: 3, finger: 4 }], barres: [{ fret: 1, fromString: 6, toString: 1, finger: 1 }], muted: [], open: [] },
  { name: "Bbsus4", fullName: "Bb Suspended 4th", category: "sus4", startFret: 1, fingers: [{ string: 4, fret: 3, finger: 2 }, { string: 3, fret: 3, finger: 3 }, { string: 2, fret: 4, finger: 4 }], barres: [{ fret: 1, fromString: 5, toString: 1, finger: 1 }], muted: [6], open: [] },
  { name: "Dbsus4", fullName: "Db Suspended 4th", category: "sus4", startFret: 4, fingers: [{ string: 4, fret: 3, finger: 2 }, { string: 3, fret: 3, finger: 3 }, { string: 2, fret: 4, finger: 4 }], barres: [{ fret: 1, fromString: 5, toString: 1, finger: 1 }], muted: [6], open: [] },
  { name: "Ebsus4", fullName: "Eb Suspended 4th", category: "sus4", startFret: 6, fingers: [{ string: 4, fret: 3, finger: 2 }, { string: 3, fret: 3, finger: 3 }, { string: 2, fret: 4, finger: 4 }], barres: [{ fret: 1, fromString: 5, toString: 1, finger: 1 }], muted: [6], open: [] },

  // ============================================================
  // DIMINISHED CHORDS
  // ============================================================
  { name: "Cdim", fullName: "C Diminished", category: "dim", startFret: 1, fingers: [{ string: 2, fret: 1, finger: 1 }, { string: 3, fret: 2, finger: 3 }, { string: 4, fret: 1, finger: 2 }], barres: [], muted: [1, 5, 6], open: [] },
  { name: "Ddim", fullName: "D Diminished", category: "dim", startFret: 1, fingers: [{ string: 1, fret: 1, finger: 1 }, { string: 3, fret: 1, finger: 2 }, { string: 2, fret: 3, finger: 4 }], barres: [], muted: [5, 6], open: [4] },
  { name: "Edim", fullName: "E Diminished", category: "dim", startFret: 1, fingers: [{ string: 4, fret: 2, finger: 2 }, { string: 3, fret: 2, finger: 3 }, { string: 2, fret: 3, finger: 4 }, { string: 5, fret: 1, finger: 1 }], barres: [], muted: [6], open: [1] },
  { name: "Fdim", fullName: "F Diminished", category: "dim", startFret: 1, fingers: [{ string: 5, fret: 3, finger: 4 }, { string: 4, fret: 1, finger: 1 }, { string: 3, fret: 2, finger: 3 }, { string: 2, fret: 1, finger: 2 }], barres: [], muted: [1, 6], open: [] },
  { name: "Gdim", fullName: "G Diminished", category: "dim", startFret: 1, fingers: [{ string: 4, fret: 2, finger: 1 }, { string: 3, fret: 3, finger: 3 }, { string: 2, fret: 2, finger: 2 }, { string: 1, fret: 3, finger: 4 }], barres: [], muted: [5, 6], open: [] },
  { name: "Adim", fullName: "A Diminished", category: "dim", startFret: 1, fingers: [{ string: 4, fret: 2, finger: 2 }, { string: 2, fret: 1, finger: 1 }, { string: 3, fret: 1, finger: 1 }], barres: [], muted: [1, 6], open: [5] },
  { name: "Bdim", fullName: "B Diminished", category: "dim", startFret: 1, fingers: [{ string: 4, fret: 3, finger: 3 }, { string: 3, fret: 4, finger: 4 }, { string: 5, fret: 2, finger: 1 }, { string: 2, fret: 3, finger: 2 }], barres: [], muted: [1, 6], open: [] },
  { name: "C#dim", fullName: "C# Diminished", category: "dim", startFret: 1, fingers: [{ string: 4, fret: 2, finger: 2 }, { string: 3, fret: 2, finger: 3 }, { string: 2, fret: 2, finger: 4 }, { string: 5, fret: 1, finger: 1 }], barres: [], muted: [1, 6], open: [] },
  { name: "Ebdim", fullName: "Eb Diminished", category: "dim", startFret: 1, fingers: [{ string: 4, fret: 2, finger: 1 }, { string: 3, fret: 4, finger: 4 }, { string: 2, fret: 2, finger: 2 }, { string: 1, fret: 2, finger: 3 }], barres: [], muted: [5, 6], open: [] },
  { name: "F#dim", fullName: "F# Diminished", category: "dim", startFret: 1, fingers: [{ string: 4, fret: 4, finger: 4 }, { string: 3, fret: 2, finger: 1 }, { string: 2, fret: 3, finger: 3 }, { string: 1, fret: 2, finger: 2 }], barres: [], muted: [5, 6], open: [] },
  { name: "Abdim", fullName: "Ab Diminished", category: "dim", startFret: 1, fingers: [{ string: 4, fret: 1, finger: 1 }, { string: 3, fret: 3, finger: 3 }, { string: 2, fret: 1, finger: 2 }, { string: 1, fret: 4, finger: 4 }], barres: [], muted: [5, 6], open: [] },
  { name: "Bbdim", fullName: "Bb Diminished", category: "dim", startFret: 1, fingers: [{ string: 5, fret: 1, finger: 1 }, { string: 4, fret: 2, finger: 2 }, { string: 3, fret: 3, finger: 3 }, { string: 2, fret: 2, finger: 4 }], barres: [], muted: [1, 6], open: [] },

  // ============================================================
  // AUGMENTED CHORDS
  // ============================================================
  { name: "Caug", fullName: "C Augmented", category: "aug", startFret: 1, fingers: [{ string: 5, fret: 3, finger: 3 }, { string: 4, fret: 2, finger: 1 }, { string: 3, fret: 1, finger: 2 }], barres: [], muted: [6], open: [1, 2] },
  { name: "Daug", fullName: "D Augmented", category: "aug", startFret: 1, fingers: [{ string: 3, fret: 3, finger: 3 }, { string: 1, fret: 2, finger: 1 }, { string: 2, fret: 3, finger: 4 }], barres: [], muted: [5, 6], open: [4] },
  { name: "Eaug", fullName: "E Augmented", category: "aug", startFret: 1, fingers: [{ string: 3, fret: 1, finger: 1 }, { string: 4, fret: 2, finger: 2 }, { string: 5, fret: 2, finger: 3 }], barres: [], muted: [6], open: [1, 2] },
  { name: "Faug", fullName: "F Augmented", category: "aug", startFret: 1, fingers: [{ string: 4, fret: 2, finger: 1 }, { string: 3, fret: 2, finger: 2 }, { string: 2, fret: 2, finger: 3 }, { string: 5, fret: 3, finger: 4 }], barres: [], muted: [6], open: [1] },
  { name: "Gaug", fullName: "G Augmented", category: "aug", startFret: 1, fingers: [{ string: 6, fret: 3, finger: 3 }, { string: 5, fret: 2, finger: 1 }, { string: 3, fret: 1, finger: 2 }, { string: 1, fret: 3, finger: 4 }], barres: [], muted: [], open: [2, 4] },
  { name: "Aaug", fullName: "A Augmented", category: "aug", startFret: 1, fingers: [{ string: 4, fret: 2, finger: 1 }, { string: 3, fret: 2, finger: 2 }, { string: 2, fret: 2, finger: 3 }, { string: 1, fret: 1, finger: 4 }], barres: [], muted: [6], open: [5] },
  { name: "Baug", fullName: "B Augmented", category: "aug", startFret: 1, fingers: [{ string: 5, fret: 2, finger: 1 }, { string: 4, fret: 3, finger: 2 }, { string: 3, fret: 3, finger: 3 }, { string: 2, fret: 3, finger: 4 }], barres: [], muted: [1, 6], open: [] },
  { name: "C#aug", fullName: "C# Augmented", category: "aug", startFret: 1, fingers: [{ string: 5, fret: 4, finger: 4 }, { string: 4, fret: 3, finger: 2 }, { string: 3, fret: 2, finger: 1 }, { string: 2, fret: 2, finger: 3 }], barres: [], muted: [6], open: [1] },
  { name: "Ebaug", fullName: "Eb Augmented", category: "aug", startFret: 1, fingers: [{ string: 4, fret: 1, finger: 1 }, { string: 3, fret: 4, finger: 4 }, { string: 2, fret: 4, finger: 3 }, { string: 1, fret: 3, finger: 2 }], barres: [], muted: [5, 6], open: [] },
  { name: "F#aug", fullName: "F# Augmented", category: "aug", startFret: 2, fingers: [{ string: 4, fret: 2, finger: 2 }, { string: 3, fret: 2, finger: 3 }, { string: 5, fret: 3, finger: 4 }], barres: [{ fret: 1, fromString: 2, toString: 1, finger: 1 }], muted: [6], open: [] },
  { name: "Abaug", fullName: "Ab Augmented", category: "aug", startFret: 4, fingers: [{ string: 4, fret: 2, finger: 2 }, { string: 3, fret: 2, finger: 3 }, { string: 5, fret: 3, finger: 4 }], barres: [{ fret: 1, fromString: 2, toString: 1, finger: 1 }], muted: [6], open: [] },
  { name: "Bbaug", fullName: "Bb Augmented", category: "aug", startFret: 1, fingers: [{ string: 5, fret: 1, finger: 1 }, { string: 4, fret: 3, finger: 3 }, { string: 3, fret: 3, finger: 4 }, { string: 2, fret: 3, finger: 2 }], barres: [], muted: [1, 6], open: [] },

  // ============================================================
  // ADD9 CHORDS
  // ============================================================
  { name: "Cadd9", fullName: "C Add 9", category: "add9", startFret: 1, fingers: [{ string: 4, fret: 2, finger: 1 }, { string: 5, fret: 3, finger: 2 }, { string: 2, fret: 3, finger: 3 }], barres: [], muted: [6], open: [1, 3] },
  { name: "Dadd9", fullName: "D Add 9", category: "add9", startFret: 1, fingers: [{ string: 3, fret: 2, finger: 1 }], barres: [], muted: [5, 6], open: [1, 2, 4] },
  { name: "Eadd9", fullName: "E Add 9", category: "add9", startFret: 1, fingers: [{ string: 3, fret: 1, finger: 1 }, { string: 5, fret: 2, finger: 2 }, { string: 4, fret: 2, finger: 3 }, { string: 1, fret: 2, finger: 4 }], barres: [], muted: [], open: [2, 6] },
  { name: "Fadd9", fullName: "F Add 9", category: "add9", startFret: 1, fingers: [{ string: 4, fret: 3, finger: 4 }, { string: 3, fret: 2, finger: 2 }, { string: 2, fret: 1, finger: 1 }], barres: [], muted: [5, 6], open: [1] },
  { name: "Gadd9", fullName: "G Add 9", category: "add9", startFret: 1, fingers: [{ string: 6, fret: 3, finger: 2 }, { string: 5, fret: 2, finger: 1 }, { string: 1, fret: 3, finger: 3 }], barres: [], muted: [], open: [2, 3, 4] },
  { name: "Aadd9", fullName: "A Add 9", category: "add9", startFret: 1, fingers: [{ string: 4, fret: 2, finger: 1 }, { string: 3, fret: 2, finger: 2 }], barres: [], muted: [6], open: [1, 2, 5] },
  { name: "Badd9", fullName: "B Add 9", category: "add9", startFret: 2, fingers: [{ string: 4, fret: 3, finger: 2 }, { string: 3, fret: 3, finger: 3 }, { string: 1, fret: 3, finger: 4 }], barres: [{ fret: 1, fromString: 5, toString: 2, finger: 1 }], muted: [6], open: [] },
  { name: "F#add9", fullName: "F# Add 9", category: "add9", startFret: 2, fingers: [{ string: 5, fret: 3, finger: 2 }, { string: 4, fret: 2, finger: 3 }, { string: 1, fret: 3, finger: 4 }], barres: [{ fret: 1, fromString: 6, toString: 1, finger: 1 }], muted: [], open: [] },
  { name: "Ebadd9", fullName: "Eb Add 9", category: "add9", startFret: 1, fingers: [{ string: 4, fret: 1, finger: 1 }, { string: 3, fret: 3, finger: 3 }, { string: 2, fret: 1, finger: 2 }, { string: 1, fret: 1, finger: 4 }], barres: [], muted: [5, 6], open: [] },
  { name: "Abadd9", fullName: "Ab Add 9", category: "add9", startFret: 4, fingers: [{ string: 5, fret: 3, finger: 2 }, { string: 4, fret: 2, finger: 3 }, { string: 1, fret: 3, finger: 4 }], barres: [{ fret: 1, fromString: 6, toString: 1, finger: 1 }], muted: [], open: [] },
  { name: "Bbadd9", fullName: "Bb Add 9", category: "add9", startFret: 1, fingers: [{ string: 4, fret: 3, finger: 3 }, { string: 3, fret: 3, finger: 4 }, { string: 2, fret: 1, finger: 2 }], barres: [{ fret: 1, fromString: 5, toString: 5, finger: 1 }], muted: [1, 6], open: [] },
  { name: "Dbadd9", fullName: "Db Add 9", category: "add9", startFret: 4, fingers: [{ string: 4, fret: 3, finger: 2 }, { string: 3, fret: 3, finger: 3 }, { string: 1, fret: 3, finger: 4 }], barres: [{ fret: 1, fromString: 5, toString: 2, finger: 1 }], muted: [6], open: [] },

  // ============================================================
  // POWER CHORDS (5th)
  // ============================================================
  { name: "C5", fullName: "C Power Chord", category: "power", startFret: 3, fingers: [{ string: 5, fret: 2, finger: 3 }], barres: [{ fret: 1, fromString: 6, toString: 6, finger: 1 }], muted: [1, 2, 3, 4], open: [] },
  { name: "D5", fullName: "D Power Chord", category: "power", startFret: 5, fingers: [{ string: 5, fret: 2, finger: 3 }], barres: [{ fret: 1, fromString: 6, toString: 6, finger: 1 }], muted: [1, 2, 3, 4], open: [] },
  { name: "E5", fullName: "E Power Chord", category: "power", startFret: 1, fingers: [{ string: 5, fret: 2, finger: 3 }], barres: [], muted: [1, 2, 3, 4], open: [6] },
  { name: "F5", fullName: "F Power Chord", category: "power", startFret: 1, fingers: [{ string: 6, fret: 1, finger: 1 }, { string: 5, fret: 3, finger: 3 }], barres: [], muted: [1, 2, 3, 4], open: [] },
  { name: "G5", fullName: "G Power Chord", category: "power", startFret: 3, fingers: [{ string: 6, fret: 1, finger: 1 }, { string: 5, fret: 3, finger: 3 }], barres: [], muted: [1, 2, 3, 4], open: [] },
  { name: "A5", fullName: "A Power Chord", category: "power", startFret: 1, fingers: [{ string: 4, fret: 2, finger: 3 }], barres: [], muted: [1, 2, 3, 6], open: [5] },
  { name: "B5", fullName: "B Power Chord", category: "power", startFret: 2, fingers: [{ string: 5, fret: 1, finger: 1 }, { string: 4, fret: 3, finger: 3 }], barres: [], muted: [1, 2, 3, 6], open: [] },
  { name: "Db5", fullName: "Db Power Chord", category: "power", startFret: 4, fingers: [{ string: 5, fret: 2, finger: 3 }], barres: [{ fret: 1, fromString: 6, toString: 6, finger: 1 }], muted: [1, 2, 3, 4], open: [] },
  { name: "Eb5", fullName: "Eb Power Chord", category: "power", startFret: 6, fingers: [{ string: 5, fret: 2, finger: 3 }], barres: [{ fret: 1, fromString: 6, toString: 6, finger: 1 }], muted: [1, 2, 3, 4], open: [] },
  { name: "F#5", fullName: "F# Power Chord", category: "power", startFret: 2, fingers: [{ string: 6, fret: 1, finger: 1 }, { string: 5, fret: 3, finger: 3 }], barres: [], muted: [1, 2, 3, 4], open: [] },
  { name: "Ab5", fullName: "Ab Power Chord", category: "power", startFret: 4, fingers: [{ string: 6, fret: 1, finger: 1 }, { string: 5, fret: 3, finger: 3 }], barres: [], muted: [1, 2, 3, 4], open: [] },
  { name: "Bb5", fullName: "Bb Power Chord", category: "power", startFret: 1, fingers: [{ string: 5, fret: 1, finger: 1 }, { string: 4, fret: 3, finger: 3 }], barres: [], muted: [1, 2, 3, 6], open: [] },

  // ============================================================
  // 9TH CHORDS
  // ============================================================
  { name: "C9", fullName: "C Ninth", category: "9th", startFret: 1, fingers: [{ string: 4, fret: 2, finger: 1 }, { string: 5, fret: 3, finger: 2 }, { string: 3, fret: 3, finger: 3 }, { string: 2, fret: 3, finger: 4 }], barres: [], muted: [6], open: [1] },
  { name: "D9", fullName: "D Ninth", category: "9th", startFret: 1, fingers: [{ string: 3, fret: 2, finger: 2 }, { string: 1, fret: 2, finger: 3 }, { string: 2, fret: 1, finger: 1 }], barres: [], muted: [5, 6], open: [4] },
  { name: "E9", fullName: "E Ninth", category: "9th", startFret: 1, fingers: [{ string: 3, fret: 1, finger: 1 }, { string: 5, fret: 2, finger: 2 }, { string: 1, fret: 2, finger: 3 }], barres: [], muted: [], open: [2, 4, 6] },
  { name: "F9", fullName: "F Ninth", category: "9th", startFret: 1, fingers: [{ string: 6, fret: 1, finger: 1 }, { string: 4, fret: 2, finger: 2 }, { string: 2, fret: 1, finger: 1 }, { string: 1, fret: 3, finger: 4 }], barres: [], muted: [5], open: [3] },
  { name: "G9", fullName: "G Ninth", category: "9th", startFret: 1, fingers: [{ string: 6, fret: 3, finger: 3 }, { string: 5, fret: 2, finger: 1 }, { string: 4, fret: 3, finger: 4 }, { string: 1, fret: 1, finger: 2 }], barres: [], muted: [], open: [2, 3] },
  { name: "A9", fullName: "A Ninth", category: "9th", startFret: 1, fingers: [{ string: 4, fret: 2, finger: 2 }, { string: 2, fret: 2, finger: 3 }], barres: [], muted: [6], open: [1, 3, 5] },
  { name: "B9", fullName: "B Ninth", category: "9th", startFret: 2, fingers: [{ string: 5, fret: 1, finger: 1 }, { string: 4, fret: 2, finger: 2 }, { string: 2, fret: 2, finger: 3 }], barres: [], muted: [6], open: [1, 3] },
  { name: "Db9", fullName: "Db Ninth", category: "9th", startFret: 4, fingers: [{ string: 6, fret: 1, finger: 1 }, { string: 4, fret: 2, finger: 2 }, { string: 2, fret: 1, finger: 1 }, { string: 1, fret: 3, finger: 4 }], barres: [], muted: [5], open: [3] },
  { name: "Eb9", fullName: "Eb Ninth", category: "9th", startFret: 6, fingers: [{ string: 6, fret: 1, finger: 1 }, { string: 4, fret: 2, finger: 2 }, { string: 2, fret: 1, finger: 1 }, { string: 1, fret: 3, finger: 4 }], barres: [], muted: [5], open: [3] },
  { name: "F#9", fullName: "F# Ninth", category: "9th", startFret: 2, fingers: [{ string: 6, fret: 1, finger: 1 }, { string: 4, fret: 2, finger: 2 }, { string: 2, fret: 1, finger: 1 }, { string: 1, fret: 3, finger: 4 }], barres: [], muted: [5], open: [3] },
  { name: "Ab9", fullName: "Ab Ninth", category: "9th", startFret: 4, fingers: [{ string: 5, fret: 1, finger: 1 }, { string: 4, fret: 2, finger: 2 }, { string: 2, fret: 2, finger: 3 }], barres: [], muted: [6], open: [1, 3] },
  { name: "Bb9", fullName: "Bb Ninth", category: "9th", startFret: 1, fingers: [{ string: 5, fret: 1, finger: 1 }, { string: 4, fret: 2, finger: 2 }, { string: 2, fret: 2, finger: 3 }], barres: [], muted: [6], open: [1, 3] },

  // ============================================================
  // DIMINISHED 7TH CHORDS
  // ============================================================
  { name: "Cdim7", fullName: "C Diminished 7th", category: "dim7", startFret: 1, fingers: [{ string: 2, fret: 1, finger: 1 }, { string: 4, fret: 1, finger: 2 }, { string: 3, fret: 2, finger: 3 }, { string: 1, fret: 1, finger: 4 }], barres: [], muted: [5, 6], open: [] },
  { name: "Ddim7", fullName: "D Diminished 7th", category: "dim7", startFret: 1, fingers: [{ string: 1, fret: 1, finger: 1 }, { string: 3, fret: 1, finger: 2 }, { string: 2, fret: 3, finger: 3 }], barres: [], muted: [5, 6], open: [4] },
  { name: "Edim7", fullName: "E Diminished 7th", category: "dim7", startFret: 1, fingers: [{ string: 5, fret: 1, finger: 1 }, { string: 4, fret: 2, finger: 2 }, { string: 3, fret: 2, finger: 3 }, { string: 2, fret: 3, finger: 4 }], barres: [], muted: [6], open: [1] },
  { name: "Fdim7", fullName: "F Diminished 7th", category: "dim7", startFret: 1, fingers: [{ string: 5, fret: 3, finger: 4 }, { string: 4, fret: 1, finger: 1 }, { string: 3, fret: 2, finger: 3 }, { string: 2, fret: 1, finger: 2 }], barres: [], muted: [1, 6], open: [] },
  { name: "Gdim7", fullName: "G Diminished 7th", category: "dim7", startFret: 1, fingers: [{ string: 5, fret: 1, finger: 1 }, { string: 4, fret: 2, finger: 2 }, { string: 3, fret: 3, finger: 3 }, { string: 2, fret: 2, finger: 4 }], barres: [], muted: [1, 6], open: [] },
  { name: "Adim7", fullName: "A Diminished 7th", category: "dim7", startFret: 1, fingers: [{ string: 4, fret: 2, finger: 2 }, { string: 3, fret: 1, finger: 1 }, { string: 2, fret: 1, finger: 3 }, { string: 1, fret: 2, finger: 4 }], barres: [], muted: [6], open: [5] },
  { name: "Bdim7", fullName: "B Diminished 7th", category: "dim7", startFret: 1, fingers: [{ string: 5, fret: 2, finger: 1 }, { string: 4, fret: 3, finger: 2 }, { string: 3, fret: 1, finger: 3 }, { string: 2, fret: 3, finger: 4 }], barres: [], muted: [1, 6], open: [] },
  { name: "C#dim7", fullName: "C# Diminished 7th", category: "dim7", startFret: 1, fingers: [{ string: 5, fret: 4, finger: 4 }, { string: 4, fret: 2, finger: 1 }, { string: 3, fret: 2, finger: 2 }, { string: 2, fret: 2, finger: 3 }], barres: [], muted: [1, 6], open: [] },
  { name: "Ebdim7", fullName: "Eb Diminished 7th", category: "dim7", startFret: 1, fingers: [{ string: 4, fret: 1, finger: 1 }, { string: 3, fret: 2, finger: 2 }, { string: 2, fret: 2, finger: 3 }, { string: 1, fret: 2, finger: 4 }], barres: [], muted: [5, 6], open: [] },
  { name: "F#dim7", fullName: "F# Diminished 7th", category: "dim7", startFret: 1, fingers: [{ string: 5, fret: 1, finger: 1 }, { string: 4, fret: 2, finger: 2 }, { string: 3, fret: 2, finger: 3 }, { string: 2, fret: 1, finger: 4 }], barres: [], muted: [1, 6], open: [] },
  { name: "Abdim7", fullName: "Ab Diminished 7th", category: "dim7", startFret: 1, fingers: [{ string: 4, fret: 1, finger: 1 }, { string: 3, fret: 3, finger: 3 }, { string: 2, fret: 1, finger: 2 }, { string: 1, fret: 1, finger: 4 }], barres: [], muted: [5, 6], open: [] },
  { name: "Bbdim7", fullName: "Bb Diminished 7th", category: "dim7", startFret: 1, fingers: [{ string: 5, fret: 1, finger: 1 }, { string: 4, fret: 2, finger: 2 }, { string: 3, fret: 0, finger: 3 }, { string: 2, fret: 2, finger: 4 }], barres: [], muted: [1, 6], open: [] },

  // ============================================================
  // 6TH CHORDS
  // ============================================================
  { name: "C6", fullName: "C Sixth", category: "6th", startFret: 1, fingers: [{ string: 2, fret: 1, finger: 1 }, { string: 4, fret: 2, finger: 2 }, { string: 5, fret: 3, finger: 3 }, { string: 3, fret: 2, finger: 4 }], barres: [], muted: [6], open: [1] },
  { name: "D6", fullName: "D Sixth", category: "6th", startFret: 1, fingers: [{ string: 1, fret: 2, finger: 2 }, { string: 3, fret: 2, finger: 3 }, { string: 2, fret: 2, finger: 4 }], barres: [], muted: [5, 6], open: [4] },
  { name: "E6", fullName: "E Sixth", category: "6th", startFret: 1, fingers: [{ string: 3, fret: 1, finger: 1 }, { string: 5, fret: 2, finger: 2 }, { string: 4, fret: 2, finger: 3 }, { string: 2, fret: 2, finger: 4 }], barres: [], muted: [], open: [1, 6] },
  { name: "F6", fullName: "F Sixth", category: "6th", startFret: 1, fingers: [{ string: 5, fret: 3, finger: 4 }, { string: 4, fret: 2, finger: 2 }, { string: 3, fret: 2, finger: 3 }], barres: [{ fret: 1, fromString: 2, toString: 1, finger: 1 }], muted: [6], open: [] },
  { name: "G6", fullName: "G Sixth", category: "6th", startFret: 1, fingers: [{ string: 6, fret: 3, finger: 3 }, { string: 5, fret: 2, finger: 1 }, { string: 1, fret: 3, finger: 4 }], barres: [], muted: [], open: [2, 3, 4] },
  { name: "A6", fullName: "A Sixth", category: "6th", startFret: 1, fingers: [{ string: 4, fret: 2, finger: 1 }, { string: 3, fret: 2, finger: 2 }, { string: 2, fret: 2, finger: 3 }, { string: 1, fret: 2, finger: 4 }], barres: [], muted: [6], open: [5] },
  { name: "B6", fullName: "B Sixth", category: "6th", startFret: 2, fingers: [{ string: 4, fret: 3, finger: 2 }, { string: 3, fret: 3, finger: 3 }, { string: 2, fret: 3, finger: 4 }, { string: 1, fret: 3, finger: 4 }], barres: [{ fret: 1, fromString: 5, toString: 1, finger: 1 }], muted: [6], open: [] },
  { name: "Db6", fullName: "Db Sixth", category: "6th", startFret: 1, fingers: [{ string: 5, fret: 4, finger: 4 }, { string: 4, fret: 3, finger: 3 }, { string: 3, fret: 1, finger: 1 }, { string: 2, fret: 2, finger: 2 }], barres: [], muted: [1, 6], open: [] },
  { name: "Eb6", fullName: "Eb Sixth", category: "6th", startFret: 1, fingers: [{ string: 4, fret: 1, finger: 1 }, { string: 3, fret: 3, finger: 2 }, { string: 2, fret: 3, finger: 3 }, { string: 1, fret: 3, finger: 4 }], barres: [], muted: [5, 6], open: [] },
  { name: "F#6", fullName: "F# Sixth", category: "6th", startFret: 2, fingers: [{ string: 5, fret: 3, finger: 3 }, { string: 4, fret: 2, finger: 2 }, { string: 3, fret: 2, finger: 4 }], barres: [{ fret: 1, fromString: 2, toString: 1, finger: 1 }], muted: [6], open: [] },
  { name: "Ab6", fullName: "Ab Sixth", category: "6th", startFret: 4, fingers: [{ string: 5, fret: 3, finger: 3 }, { string: 4, fret: 2, finger: 2 }, { string: 3, fret: 2, finger: 4 }], barres: [{ fret: 1, fromString: 2, toString: 1, finger: 1 }], muted: [6], open: [] },
  { name: "Bb6", fullName: "Bb Sixth", category: "6th", startFret: 1, fingers: [{ string: 4, fret: 3, finger: 3 }, { string: 3, fret: 3, finger: 4 }, { string: 2, fret: 3, finger: 2 }], barres: [{ fret: 1, fromString: 5, toString: 1, finger: 1 }], muted: [6], open: [] },

  // ============================================================
  // MINOR 6TH CHORDS
  // ============================================================
  { name: "Cm6", fullName: "C Minor 6th", category: "min6", startFret: 3, fingers: [{ string: 4, fret: 2, finger: 2 }, { string: 2, fret: 2, finger: 3 }, { string: 3, fret: 2, finger: 4 }], barres: [{ fret: 1, fromString: 5, toString: 1, finger: 1 }], muted: [6], open: [] },
  { name: "Dm6", fullName: "D Minor 6th", category: "min6", startFret: 1, fingers: [{ string: 1, fret: 1, finger: 1 }, { string: 3, fret: 2, finger: 3 }], barres: [], muted: [5, 6], open: [2, 4] },
  { name: "Em6", fullName: "E Minor 6th", category: "min6", startFret: 1, fingers: [{ string: 5, fret: 2, finger: 2 }, { string: 4, fret: 2, finger: 3 }, { string: 2, fret: 2, finger: 4 }], barres: [], muted: [], open: [1, 3, 6] },
  { name: "Fm6", fullName: "F Minor 6th", category: "min6", startFret: 1, fingers: [{ string: 5, fret: 3, finger: 3 }, { string: 3, fret: 1, finger: 1 }, { string: 2, fret: 1, finger: 2 }], barres: [], muted: [6], open: [1, 4] },
  { name: "Gm6", fullName: "G Minor 6th", category: "min6", startFret: 3, fingers: [{ string: 5, fret: 3, finger: 3 }, { string: 3, fret: 2, finger: 2 }], barres: [{ fret: 1, fromString: 6, toString: 1, finger: 1 }], muted: [], open: [] },
  { name: "Am6", fullName: "A Minor 6th", category: "min6", startFret: 1, fingers: [{ string: 4, fret: 2, finger: 2 }, { string: 3, fret: 2, finger: 3 }, { string: 2, fret: 1, finger: 1 }, { string: 1, fret: 2, finger: 4 }], barres: [], muted: [6], open: [5] },
  { name: "Bm6", fullName: "B Minor 6th", category: "min6", startFret: 2, fingers: [{ string: 4, fret: 3, finger: 3 }, { string: 2, fret: 2, finger: 2 }, { string: 3, fret: 2, finger: 4 }], barres: [{ fret: 1, fromString: 5, toString: 1, finger: 1 }], muted: [6], open: [] },
  { name: "C#m6", fullName: "C# Minor 6th", category: "min6", startFret: 4, fingers: [{ string: 4, fret: 3, finger: 3 }, { string: 2, fret: 2, finger: 2 }, { string: 3, fret: 2, finger: 4 }], barres: [{ fret: 1, fromString: 5, toString: 1, finger: 1 }], muted: [6], open: [] },
  { name: "Ebm6", fullName: "Eb Minor 6th", category: "min6", startFret: 6, fingers: [{ string: 4, fret: 3, finger: 3 }, { string: 2, fret: 2, finger: 2 }, { string: 3, fret: 2, finger: 4 }], barres: [{ fret: 1, fromString: 5, toString: 1, finger: 1 }], muted: [6], open: [] },
  { name: "F#m6", fullName: "F# Minor 6th", category: "min6", startFret: 2, fingers: [{ string: 5, fret: 3, finger: 3 }, { string: 3, fret: 2, finger: 2 }], barres: [{ fret: 1, fromString: 6, toString: 1, finger: 1 }], muted: [], open: [] },
  { name: "G#m6", fullName: "G# Minor 6th", category: "min6", startFret: 4, fingers: [{ string: 5, fret: 3, finger: 3 }, { string: 3, fret: 2, finger: 2 }], barres: [{ fret: 1, fromString: 6, toString: 1, finger: 1 }], muted: [], open: [] },
  { name: "Bbm6", fullName: "Bb Minor 6th", category: "min6", startFret: 1, fingers: [{ string: 4, fret: 2, finger: 2 }, { string: 2, fret: 2, finger: 3 }, { string: 3, fret: 2, finger: 4 }], barres: [{ fret: 1, fromString: 5, toString: 1, finger: 1 }], muted: [6], open: [] },

  // ============================================================
  // 7SUS4 CHORDS
  // ============================================================
  { name: "C7sus4", fullName: "C 7th Suspended 4th", category: "7sus4", startFret: 1, fingers: [{ string: 2, fret: 1, finger: 1 }, { string: 4, fret: 3, finger: 3 }, { string: 5, fret: 3, finger: 4 }, { string: 3, fret: 3, finger: 2 }], barres: [], muted: [6], open: [1] },
  { name: "D7sus4", fullName: "D 7th Suspended 4th", category: "7sus4", startFret: 1, fingers: [{ string: 3, fret: 2, finger: 2 }, { string: 1, fret: 3, finger: 4 }, { string: 2, fret: 1, finger: 1 }], barres: [], muted: [5, 6], open: [4] },
  { name: "E7sus4", fullName: "E 7th Suspended 4th", category: "7sus4", startFret: 1, fingers: [{ string: 5, fret: 2, finger: 2 }, { string: 4, fret: 2, finger: 3 }], barres: [], muted: [], open: [1, 2, 3, 6] },
  { name: "F7sus4", fullName: "F 7th Suspended 4th", category: "7sus4", startFret: 1, fingers: [{ string: 4, fret: 3, finger: 3 }, { string: 5, fret: 3, finger: 4 }], barres: [{ fret: 1, fromString: 6, toString: 1, finger: 1 }], muted: [], open: [] },
  { name: "G7sus4", fullName: "G 7th Suspended 4th", category: "7sus4", startFret: 1, fingers: [{ string: 6, fret: 3, finger: 3 }, { string: 1, fret: 1, finger: 1 }, { string: 2, fret: 1, finger: 2 }], barres: [], muted: [], open: [3, 4, 5] },
  { name: "A7sus4", fullName: "A 7th Suspended 4th", category: "7sus4", startFret: 1, fingers: [{ string: 4, fret: 2, finger: 1 }, { string: 2, fret: 3, finger: 3 }], barres: [], muted: [6], open: [1, 3, 5] },
  { name: "B7sus4", fullName: "B 7th Suspended 4th", category: "7sus4", startFret: 2, fingers: [{ string: 4, fret: 3, finger: 2 }, { string: 3, fret: 3, finger: 3 }, { string: 2, fret: 4, finger: 4 }], barres: [{ fret: 1, fromString: 5, toString: 1, finger: 1 }], muted: [6], open: [] },
  { name: "Db7sus4", fullName: "Db 7th Suspended 4th", category: "7sus4", startFret: 4, fingers: [{ string: 4, fret: 3, finger: 3 }, { string: 5, fret: 3, finger: 4 }], barres: [{ fret: 1, fromString: 6, toString: 1, finger: 1 }], muted: [], open: [] },
  { name: "Eb7sus4", fullName: "Eb 7th Suspended 4th", category: "7sus4", startFret: 6, fingers: [{ string: 4, fret: 3, finger: 3 }, { string: 5, fret: 3, finger: 4 }], barres: [{ fret: 1, fromString: 6, toString: 1, finger: 1 }], muted: [], open: [] },
  { name: "F#7sus4", fullName: "F# 7th Suspended 4th", category: "7sus4", startFret: 2, fingers: [{ string: 4, fret: 3, finger: 3 }, { string: 5, fret: 3, finger: 4 }], barres: [{ fret: 1, fromString: 6, toString: 1, finger: 1 }], muted: [], open: [] },
  { name: "Ab7sus4", fullName: "Ab 7th Suspended 4th", category: "7sus4", startFret: 4, fingers: [{ string: 4, fret: 3, finger: 2 }, { string: 3, fret: 3, finger: 3 }, { string: 2, fret: 4, finger: 4 }], barres: [{ fret: 1, fromString: 5, toString: 1, finger: 1 }], muted: [6], open: [] },
  { name: "Bb7sus4", fullName: "Bb 7th Suspended 4th", category: "7sus4", startFret: 1, fingers: [{ string: 4, fret: 3, finger: 2 }, { string: 3, fret: 3, finger: 3 }, { string: 2, fret: 4, finger: 4 }], barres: [{ fret: 1, fromString: 5, toString: 1, finger: 1 }], muted: [6], open: [] },

  // ============================================================
  // MINOR 9TH CHORDS
  // ============================================================
  { name: "Cm9", fullName: "C Minor 9th", category: "min9", startFret: 3, fingers: [{ string: 4, fret: 2, finger: 2 }, { string: 2, fret: 3, finger: 4 }], barres: [{ fret: 1, fromString: 5, toString: 1, finger: 1 }], muted: [6], open: [] },
  { name: "Dm9", fullName: "D Minor 9th", category: "min9", startFret: 1, fingers: [{ string: 1, fret: 1, finger: 1 }, { string: 3, fret: 2, finger: 2 }], barres: [], muted: [5, 6], open: [2, 4] },
  { name: "Em9", fullName: "E Minor 9th", category: "min9", startFret: 1, fingers: [{ string: 5, fret: 2, finger: 2 }, { string: 1, fret: 2, finger: 3 }], barres: [], muted: [], open: [2, 3, 4, 6] },
  { name: "Fm9", fullName: "F Minor 9th", category: "min9", startFret: 1, fingers: [{ string: 5, fret: 3, finger: 3 }, { string: 3, fret: 1, finger: 1 }, { string: 1, fret: 1, finger: 2 }], barres: [], muted: [6], open: [2, 4] },
  { name: "Gm9", fullName: "G Minor 9th", category: "min9", startFret: 3, fingers: [{ string: 5, fret: 3, finger: 3 }, { string: 3, fret: 2, finger: 2 }, { string: 1, fret: 2, finger: 4 }], barres: [{ fret: 1, fromString: 6, toString: 1, finger: 1 }], muted: [], open: [] },
  { name: "Am9", fullName: "A Minor 9th", category: "min9", startFret: 1, fingers: [{ string: 2, fret: 1, finger: 1 }, { string: 4, fret: 2, finger: 2 }], barres: [], muted: [6], open: [1, 3, 5] },
  { name: "Bm9", fullName: "B Minor 9th", category: "min9", startFret: 2, fingers: [{ string: 4, fret: 3, finger: 3 }, { string: 1, fret: 3, finger: 4 }], barres: [{ fret: 1, fromString: 5, toString: 1, finger: 1 }], muted: [6], open: [] },
  { name: "C#m9", fullName: "C# Minor 9th", category: "min9", startFret: 4, fingers: [{ string: 4, fret: 3, finger: 3 }, { string: 1, fret: 3, finger: 4 }], barres: [{ fret: 1, fromString: 5, toString: 1, finger: 1 }], muted: [6], open: [] },
  { name: "Ebm9", fullName: "Eb Minor 9th", category: "min9", startFret: 6, fingers: [{ string: 4, fret: 3, finger: 3 }, { string: 1, fret: 3, finger: 4 }], barres: [{ fret: 1, fromString: 5, toString: 1, finger: 1 }], muted: [6], open: [] },
  { name: "F#m9", fullName: "F# Minor 9th", category: "min9", startFret: 2, fingers: [{ string: 5, fret: 3, finger: 3 }, { string: 3, fret: 2, finger: 2 }, { string: 1, fret: 2, finger: 4 }], barres: [{ fret: 1, fromString: 6, toString: 1, finger: 1 }], muted: [], open: [] },
  { name: "G#m9", fullName: "G# Minor 9th", category: "min9", startFret: 4, fingers: [{ string: 5, fret: 3, finger: 3 }, { string: 3, fret: 2, finger: 2 }, { string: 1, fret: 2, finger: 4 }], barres: [{ fret: 1, fromString: 6, toString: 1, finger: 1 }], muted: [], open: [] },
  { name: "Bbm9", fullName: "Bb Minor 9th", category: "min9", startFret: 1, fingers: [{ string: 4, fret: 2, finger: 2 }, { string: 2, fret: 3, finger: 4 }], barres: [{ fret: 1, fromString: 5, toString: 1, finger: 1 }], muted: [6], open: [] },

  // ============================================================
  // MAJOR 9TH CHORDS
  // ============================================================
  { name: "Cmaj9", fullName: "C Major 9th", category: "maj9", startFret: 1, fingers: [{ string: 4, fret: 2, finger: 1 }, { string: 5, fret: 3, finger: 2 }], barres: [], muted: [6], open: [1, 2, 3] },
  { name: "Dmaj9", fullName: "D Major 9th", category: "maj9", startFret: 1, fingers: [{ string: 3, fret: 2, finger: 1 }, { string: 1, fret: 2, finger: 2 }, { string: 2, fret: 2, finger: 3 }], barres: [], muted: [5, 6], open: [4] },
  { name: "Emaj9", fullName: "E Major 9th", category: "maj9", startFret: 1, fingers: [{ string: 3, fret: 1, finger: 1 }, { string: 5, fret: 2, finger: 2 }, { string: 4, fret: 1, finger: 3 }, { string: 1, fret: 2, finger: 4 }], barres: [], muted: [], open: [2, 6] },
  { name: "Fmaj9", fullName: "F Major 9th", category: "maj9", startFret: 1, fingers: [{ string: 4, fret: 2, finger: 1 }, { string: 3, fret: 2, finger: 2 }, { string: 2, fret: 1, finger: 3 }], barres: [], muted: [5, 6], open: [1] },
  { name: "Gmaj9", fullName: "G Major 9th", category: "maj9", startFret: 1, fingers: [{ string: 6, fret: 3, finger: 3 }, { string: 5, fret: 2, finger: 1 }, { string: 1, fret: 2, finger: 2 }], barres: [], muted: [], open: [2, 3, 4] },
  { name: "Amaj9", fullName: "A Major 9th", category: "maj9", startFret: 1, fingers: [{ string: 4, fret: 2, finger: 2 }, { string: 3, fret: 1, finger: 1 }, { string: 2, fret: 2, finger: 3 }], barres: [], muted: [6], open: [1, 5] },
  { name: "Bmaj9", fullName: "B Major 9th", category: "maj9", startFret: 2, fingers: [{ string: 4, fret: 3, finger: 2 }, { string: 3, fret: 2, finger: 3 }, { string: 1, fret: 3, finger: 4 }], barres: [{ fret: 1, fromString: 5, toString: 2, finger: 1 }], muted: [6], open: [] },
  { name: "Dbmaj9", fullName: "Db Major 9th", category: "maj9", startFret: 4, fingers: [{ string: 4, fret: 3, finger: 2 }, { string: 3, fret: 2, finger: 3 }, { string: 1, fret: 3, finger: 4 }], barres: [{ fret: 1, fromString: 5, toString: 2, finger: 1 }], muted: [6], open: [] },
  { name: "Ebmaj9", fullName: "Eb Major 9th", category: "maj9", startFret: 6, fingers: [{ string: 4, fret: 3, finger: 2 }, { string: 3, fret: 2, finger: 3 }, { string: 1, fret: 3, finger: 4 }], barres: [{ fret: 1, fromString: 5, toString: 2, finger: 1 }], muted: [6], open: [] },
  { name: "F#maj9", fullName: "F# Major 9th", category: "maj9", startFret: 2, fingers: [{ string: 5, fret: 3, finger: 3 }, { string: 3, fret: 2, finger: 2 }, { string: 1, fret: 2, finger: 4 }], barres: [{ fret: 1, fromString: 6, toString: 1, finger: 1 }], muted: [], open: [] },
  { name: "Abmaj9", fullName: "Ab Major 9th", category: "maj9", startFret: 4, fingers: [{ string: 5, fret: 3, finger: 3 }, { string: 3, fret: 2, finger: 2 }, { string: 1, fret: 2, finger: 4 }], barres: [{ fret: 1, fromString: 6, toString: 1, finger: 1 }], muted: [], open: [] },
  { name: "Bbmaj9", fullName: "Bb Major 9th", category: "maj9", startFret: 1, fingers: [{ string: 4, fret: 3, finger: 3 }, { string: 3, fret: 2, finger: 2 }, { string: 1, fret: 3, finger: 4 }], barres: [{ fret: 1, fromString: 5, toString: 2, finger: 1 }], muted: [6], open: [] },

  // ============================================================
  // 11TH CHORDS
  // ============================================================
  { name: "C11", fullName: "C Eleventh", category: "11th", startFret: 1, fingers: [{ string: 4, fret: 2, finger: 1 }, { string: 5, fret: 3, finger: 2 }, { string: 3, fret: 3, finger: 3 }], barres: [], muted: [6], open: [1, 2] },
  { name: "D11", fullName: "D Eleventh", category: "11th", startFret: 1, fingers: [{ string: 3, fret: 2, finger: 2 }], barres: [], muted: [5, 6], open: [1, 2, 4] },
  { name: "E11", fullName: "E Eleventh", category: "11th", startFret: 1, fingers: [{ string: 3, fret: 1, finger: 1 }, { string: 5, fret: 2, finger: 2 }], barres: [], muted: [], open: [1, 2, 4, 6] },
  { name: "G11", fullName: "G Eleventh", category: "11th", startFret: 1, fingers: [{ string: 6, fret: 3, finger: 4 }, { string: 5, fret: 2, finger: 2 }, { string: 1, fret: 1, finger: 1 }], barres: [], muted: [], open: [2, 3, 4] },
  { name: "A11", fullName: "A Eleventh", category: "11th", startFret: 1, fingers: [{ string: 4, fret: 2, finger: 2 }], barres: [], muted: [6], open: [1, 2, 3, 5] },
  { name: "F11", fullName: "F Eleventh", category: "11th", startFret: 1, fingers: [{ string: 6, fret: 1, finger: 1 }, { string: 4, fret: 1, finger: 2 }, { string: 2, fret: 1, finger: 3 }], barres: [], muted: [], open: [3, 5] },
  { name: "B11", fullName: "B Eleventh", category: "11th", startFret: 2, fingers: [{ string: 4, fret: 3, finger: 3 }], barres: [{ fret: 1, fromString: 5, toString: 1, finger: 1 }], muted: [6], open: [] },
  { name: "Db11", fullName: "Db Eleventh", category: "11th", startFret: 4, fingers: [{ string: 4, fret: 3, finger: 3 }], barres: [{ fret: 1, fromString: 5, toString: 1, finger: 1 }], muted: [6], open: [] },
  { name: "Eb11", fullName: "Eb Eleventh", category: "11th", startFret: 6, fingers: [{ string: 4, fret: 3, finger: 3 }], barres: [{ fret: 1, fromString: 5, toString: 1, finger: 1 }], muted: [6], open: [] },
  { name: "F#11", fullName: "F# Eleventh", category: "11th", startFret: 2, fingers: [{ string: 5, fret: 3, finger: 3 }], barres: [{ fret: 1, fromString: 6, toString: 1, finger: 1 }], muted: [], open: [] },
  { name: "Ab11", fullName: "Ab Eleventh", category: "11th", startFret: 4, fingers: [{ string: 5, fret: 3, finger: 3 }], barres: [{ fret: 1, fromString: 6, toString: 1, finger: 1 }], muted: [], open: [] },
  { name: "Bb11", fullName: "Bb Eleventh", category: "11th", startFret: 1, fingers: [{ string: 4, fret: 3, finger: 3 }], barres: [{ fret: 1, fromString: 5, toString: 1, finger: 1 }], muted: [6], open: [] },

  // ============================================================
  // 13TH CHORDS
  // ============================================================
  { name: "C13", fullName: "C Thirteenth", category: "13th", startFret: 1, fingers: [{ string: 5, fret: 3, finger: 3 }, { string: 4, fret: 2, finger: 1 }, { string: 3, fret: 3, finger: 4 }, { string: 2, fret: 3, finger: 2 }], barres: [], muted: [6], open: [1] },
  { name: "D13", fullName: "D Thirteenth", category: "13th", startFret: 1, fingers: [{ string: 3, fret: 2, finger: 2 }, { string: 2, fret: 1, finger: 1 }, { string: 1, fret: 2, finger: 3 }], barres: [], muted: [5, 6], open: [4] },
  { name: "E13", fullName: "E Thirteenth", category: "13th", startFret: 1, fingers: [{ string: 3, fret: 1, finger: 1 }, { string: 5, fret: 2, finger: 2 }, { string: 2, fret: 2, finger: 3 }, { string: 1, fret: 2, finger: 4 }], barres: [], muted: [], open: [4, 6] },
  { name: "G13", fullName: "G Thirteenth", category: "13th", startFret: 1, fingers: [{ string: 6, fret: 3, finger: 3 }, { string: 1, fret: 1, finger: 1 }, { string: 3, fret: 2, finger: 2 }], barres: [], muted: [], open: [2, 4, 5] },
  { name: "A13", fullName: "A Thirteenth", category: "13th", startFret: 1, fingers: [{ string: 4, fret: 2, finger: 2 }, { string: 2, fret: 2, finger: 3 }, { string: 1, fret: 2, finger: 4 }], barres: [], muted: [6], open: [3, 5] },
  { name: "F13", fullName: "F Thirteenth", category: "13th", startFret: 1, fingers: [{ string: 6, fret: 1, finger: 1 }, { string: 4, fret: 2, finger: 2 }, { string: 2, fret: 3, finger: 4 }, { string: 3, fret: 2, finger: 3 }], barres: [], muted: [5], open: [1] },
  { name: "B13", fullName: "B Thirteenth", category: "13th", startFret: 2, fingers: [{ string: 5, fret: 1, finger: 1 }, { string: 4, fret: 1, finger: 2 }, { string: 2, fret: 2, finger: 3 }, { string: 1, fret: 2, finger: 4 }], barres: [], muted: [6], open: [3] },
  { name: "Db13", fullName: "Db Thirteenth", category: "13th", startFret: 4, fingers: [{ string: 6, fret: 1, finger: 1 }, { string: 4, fret: 2, finger: 2 }, { string: 2, fret: 3, finger: 4 }, { string: 3, fret: 2, finger: 3 }], barres: [], muted: [5], open: [1] },
  { name: "Eb13", fullName: "Eb Thirteenth", category: "13th", startFret: 6, fingers: [{ string: 6, fret: 1, finger: 1 }, { string: 4, fret: 2, finger: 2 }, { string: 2, fret: 3, finger: 4 }, { string: 3, fret: 2, finger: 3 }], barres: [], muted: [5], open: [1] },
  { name: "F#13", fullName: "F# Thirteenth", category: "13th", startFret: 2, fingers: [{ string: 6, fret: 1, finger: 1 }, { string: 4, fret: 2, finger: 2 }, { string: 2, fret: 3, finger: 4 }, { string: 3, fret: 2, finger: 3 }], barres: [], muted: [5], open: [1] },
  { name: "Ab13", fullName: "Ab Thirteenth", category: "13th", startFret: 4, fingers: [{ string: 5, fret: 1, finger: 1 }, { string: 4, fret: 1, finger: 2 }, { string: 2, fret: 2, finger: 3 }, { string: 1, fret: 2, finger: 4 }], barres: [], muted: [6], open: [3] },
  { name: "Bb13", fullName: "Bb Thirteenth", category: "13th", startFret: 1, fingers: [{ string: 5, fret: 1, finger: 1 }, { string: 4, fret: 1, finger: 2 }, { string: 2, fret: 2, finger: 3 }, { string: 1, fret: 2, finger: 4 }], barres: [], muted: [6], open: [3] },

  // ============================================================
  // HALF-DIMINISHED (m7b5) CHORDS
  // ============================================================
  { name: "Cm7b5", fullName: "C Half-Diminished", category: "m7b5", startFret: 3, fingers: [{ string: 4, fret: 2, finger: 2 }, { string: 3, fret: 3, finger: 4 }], barres: [{ fret: 1, fromString: 5, toString: 1, finger: 1 }], muted: [6], open: [] },
  { name: "Dm7b5", fullName: "D Half-Diminished", category: "m7b5", startFret: 1, fingers: [{ string: 1, fret: 1, finger: 1 }, { string: 3, fret: 1, finger: 2 }, { string: 2, fret: 1, finger: 3 }], barres: [], muted: [5, 6], open: [4] },
  { name: "Em7b5", fullName: "E Half-Diminished", category: "m7b5", startFret: 1, fingers: [{ string: 5, fret: 1, finger: 1 }, { string: 4, fret: 2, finger: 3 }, { string: 3, fret: 2, finger: 4 }], barres: [], muted: [6], open: [1, 2] },
  { name: "Fm7b5", fullName: "F Half-Diminished", category: "m7b5", startFret: 1, fingers: [{ string: 5, fret: 3, finger: 4 }, { string: 4, fret: 1, finger: 1 }, { string: 3, fret: 1, finger: 2 }], barres: [], muted: [6], open: [1, 2] },
  { name: "Gm7b5", fullName: "G Half-Diminished", category: "m7b5", startFret: 3, fingers: [{ string: 5, fret: 3, finger: 4 }, { string: 4, fret: 1, finger: 1 }, { string: 3, fret: 1, finger: 2 }], barres: [], muted: [1, 6], open: [2] },
  { name: "Am7b5", fullName: "A Half-Diminished", category: "m7b5", startFret: 1, fingers: [{ string: 4, fret: 2, finger: 2 }, { string: 3, fret: 1, finger: 1 }, { string: 2, fret: 1, finger: 3 }], barres: [], muted: [6], open: [1, 5] },
  { name: "Bm7b5", fullName: "B Half-Diminished", category: "m7b5", startFret: 1, fingers: [{ string: 5, fret: 2, finger: 1 }, { string: 4, fret: 3, finger: 3 }, { string: 3, fret: 2, finger: 2 }, { string: 2, fret: 3, finger: 4 }], barres: [], muted: [1, 6], open: [] },
  { name: "C#m7b5", fullName: "C# Half-Diminished", category: "m7b5", startFret: 4, fingers: [{ string: 4, fret: 2, finger: 2 }, { string: 3, fret: 3, finger: 4 }], barres: [{ fret: 1, fromString: 5, toString: 1, finger: 1 }], muted: [6], open: [] },
  { name: "Ebm7b5", fullName: "Eb Half-Diminished", category: "m7b5", startFret: 6, fingers: [{ string: 4, fret: 2, finger: 2 }, { string: 3, fret: 3, finger: 4 }], barres: [{ fret: 1, fromString: 5, toString: 1, finger: 1 }], muted: [6], open: [] },
  { name: "F#m7b5", fullName: "F# Half-Diminished", category: "m7b5", startFret: 2, fingers: [{ string: 5, fret: 3, finger: 4 }, { string: 4, fret: 1, finger: 1 }, { string: 3, fret: 1, finger: 2 }], barres: [], muted: [6], open: [1, 2] },
  { name: "G#m7b5", fullName: "G# Half-Diminished", category: "m7b5", startFret: 4, fingers: [{ string: 5, fret: 3, finger: 4 }, { string: 4, fret: 1, finger: 1 }, { string: 3, fret: 1, finger: 2 }], barres: [], muted: [6], open: [1, 2] },
  { name: "Bbm7b5", fullName: "Bb Half-Diminished", category: "m7b5", startFret: 1, fingers: [{ string: 4, fret: 2, finger: 2 }, { string: 3, fret: 3, finger: 4 }], barres: [{ fret: 1, fromString: 5, toString: 1, finger: 1 }], muted: [6], open: [] },

  // ============================================================
  // DOMINANT 7#9 (Hendrix Chord)
  // ============================================================
  { name: "C7#9", fullName: "C 7th Sharp 9th", category: "7#9", startFret: 3, fingers: [{ string: 5, fret: 2, finger: 2 }, { string: 4, fret: 1, finger: 1 }, { string: 2, fret: 4, finger: 4 }], barres: [], muted: [6], open: [1, 3] },
  { name: "D7#9", fullName: "D 7th Sharp 9th", category: "7#9", startFret: 5, fingers: [{ string: 5, fret: 2, finger: 2 }, { string: 4, fret: 1, finger: 1 }, { string: 2, fret: 4, finger: 4 }], barres: [], muted: [6], open: [1, 3] },
  { name: "E7#9", fullName: "E 7th Sharp 9th", category: "7#9", startFret: 1, fingers: [{ string: 5, fret: 2, finger: 2 }, { string: 3, fret: 1, finger: 1 }, { string: 2, fret: 3, finger: 4 }], barres: [], muted: [], open: [4, 6] },
  { name: "F7#9", fullName: "F 7th Sharp 9th", category: "7#9", startFret: 1, fingers: [{ string: 6, fret: 1, finger: 1 }, { string: 5, fret: 3, finger: 3 }, { string: 3, fret: 2, finger: 2 }, { string: 2, fret: 4, finger: 4 }], barres: [], muted: [], open: [4] },
  { name: "G7#9", fullName: "G 7th Sharp 9th", category: "7#9", startFret: 3, fingers: [{ string: 6, fret: 1, finger: 1 }, { string: 5, fret: 3, finger: 3 }, { string: 3, fret: 2, finger: 2 }, { string: 2, fret: 4, finger: 4 }], barres: [], muted: [], open: [4] },
  { name: "A7#9", fullName: "A 7th Sharp 9th", category: "7#9", startFret: 5, fingers: [{ string: 6, fret: 1, finger: 1 }, { string: 5, fret: 3, finger: 3 }, { string: 3, fret: 2, finger: 2 }, { string: 2, fret: 4, finger: 4 }], barres: [], muted: [], open: [4] },
  { name: "B7#9", fullName: "B 7th Sharp 9th", category: "7#9", startFret: 7, fingers: [{ string: 6, fret: 1, finger: 1 }, { string: 5, fret: 3, finger: 3 }, { string: 3, fret: 2, finger: 2 }, { string: 2, fret: 4, finger: 4 }], barres: [], muted: [], open: [4] },
  { name: "Db7#9", fullName: "Db 7th Sharp 9th", category: "7#9", startFret: 4, fingers: [{ string: 5, fret: 2, finger: 2 }, { string: 4, fret: 1, finger: 1 }, { string: 2, fret: 4, finger: 4 }], barres: [], muted: [6], open: [1, 3] },
  { name: "Eb7#9", fullName: "Eb 7th Sharp 9th", category: "7#9", startFret: 6, fingers: [{ string: 5, fret: 2, finger: 2 }, { string: 4, fret: 1, finger: 1 }, { string: 2, fret: 4, finger: 4 }], barres: [], muted: [6], open: [1, 3] },
  { name: "F#7#9", fullName: "F# 7th Sharp 9th", category: "7#9", startFret: 2, fingers: [{ string: 6, fret: 1, finger: 1 }, { string: 5, fret: 3, finger: 3 }, { string: 3, fret: 2, finger: 2 }, { string: 2, fret: 4, finger: 4 }], barres: [], muted: [], open: [4] },
  { name: "Ab7#9", fullName: "Ab 7th Sharp 9th", category: "7#9", startFret: 4, fingers: [{ string: 6, fret: 1, finger: 1 }, { string: 5, fret: 3, finger: 3 }, { string: 3, fret: 2, finger: 2 }, { string: 2, fret: 4, finger: 4 }], barres: [], muted: [], open: [4] },
  { name: "Bb7#9", fullName: "Bb 7th Sharp 9th", category: "7#9", startFret: 1, fingers: [{ string: 5, fret: 2, finger: 2 }, { string: 4, fret: 1, finger: 1 }, { string: 2, fret: 4, finger: 4 }], barres: [], muted: [6], open: [1, 3] },

  // ============================================================
  // SLASH / INVERSIONS (popular ones)
  // ============================================================
  { name: "C/G", fullName: "C Major / G Bass", category: "slash", startFret: 1, fingers: [{ string: 2, fret: 1, finger: 1 }, { string: 4, fret: 2, finger: 2 }, { string: 5, fret: 3, finger: 3 }], barres: [], muted: [], open: [1, 3, 6] },
  { name: "C/E", fullName: "C Major / E Bass", category: "slash", startFret: 1, fingers: [{ string: 2, fret: 1, finger: 1 }, { string: 4, fret: 2, finger: 2 }, { string: 5, fret: 3, finger: 4 }], barres: [], muted: [6], open: [1, 3] },
  { name: "D/F#", fullName: "D Major / F# Bass", category: "slash", startFret: 1, fingers: [{ string: 6, fret: 2, finger: 0 }, { string: 3, fret: 2, finger: 1 }, { string: 1, fret: 2, finger: 2 }, { string: 2, fret: 3, finger: 3 }], barres: [], muted: [5], open: [4] },
  { name: "G/B", fullName: "G Major / B Bass", category: "slash", startFret: 1, fingers: [{ string: 5, fret: 2, finger: 1 }, { string: 6, fret: 3, finger: 2 }, { string: 1, fret: 3, finger: 3 }], barres: [], muted: [6], open: [2, 3, 4] },
  { name: "Am/G", fullName: "A Minor / G Bass", category: "slash", startFret: 1, fingers: [{ string: 2, fret: 1, finger: 1 }, { string: 4, fret: 2, finger: 2 }, { string: 3, fret: 2, finger: 3 }], barres: [], muted: [], open: [1, 5, 6] },
  { name: "Am/E", fullName: "A Minor / E Bass", category: "slash", startFret: 1, fingers: [{ string: 2, fret: 1, finger: 1 }, { string: 4, fret: 2, finger: 2 }, { string: 3, fret: 2, finger: 3 }], barres: [], muted: [], open: [1, 5, 6] },
  { name: "Em/D", fullName: "E Minor / D Bass", category: "slash", startFret: 1, fingers: [{ string: 5, fret: 2, finger: 2 }, { string: 4, fret: 2, finger: 3 }], barres: [], muted: [6], open: [1, 2, 3] },
  { name: "F/C", fullName: "F Major / C Bass", category: "slash", startFret: 1, fingers: [{ string: 5, fret: 3, finger: 3 }, { string: 4, fret: 3, finger: 4 }, { string: 3, fret: 2, finger: 2 }], barres: [{ fret: 1, fromString: 2, toString: 1, finger: 1 }], muted: [6], open: [] },
  { name: "G/D", fullName: "G Major / D Bass", category: "slash", startFret: 1, fingers: [{ string: 5, fret: 2, finger: 1 }, { string: 6, fret: 3, finger: 2 }, { string: 1, fret: 3, finger: 3 }], barres: [], muted: [6], open: [2, 3, 4] },
  { name: "A/E", fullName: "A Major / E Bass", category: "slash", startFret: 1, fingers: [{ string: 4, fret: 2, finger: 1 }, { string: 3, fret: 2, finger: 2 }, { string: 2, fret: 2, finger: 3 }], barres: [], muted: [], open: [1, 5, 6] },
  { name: "D/A", fullName: "D Major / A Bass", category: "slash", startFret: 1, fingers: [{ string: 3, fret: 2, finger: 1 }, { string: 1, fret: 2, finger: 2 }, { string: 2, fret: 3, finger: 3 }], barres: [], muted: [6], open: [4, 5] },
  { name: "E/G#", fullName: "E Major / G# Bass", category: "slash", startFret: 1, fingers: [{ string: 6, fret: 4, finger: 4 }, { string: 3, fret: 1, finger: 1 }, { string: 5, fret: 2, finger: 2 }, { string: 4, fret: 2, finger: 3 }], barres: [], muted: [], open: [1, 2] },

  // ============================================================
  // ALTERNATE VOICINGS - Major (barre shapes up the neck)
  // ============================================================
  { name: "C (barre)", fullName: "C Major Barre", category: "major", startFret: 3, fingers: [{ string: 5, fret: 3, finger: 3 }, { string: 4, fret: 3, finger: 4 }], barres: [{ fret: 1, fromString: 6, toString: 1, finger: 1 }], muted: [], open: [] },
  { name: "D (barre)", fullName: "D Major Barre", category: "major", startFret: 5, fingers: [{ string: 5, fret: 3, finger: 3 }, { string: 4, fret: 3, finger: 4 }], barres: [{ fret: 1, fromString: 6, toString: 1, finger: 1 }], muted: [], open: [] },
  { name: "G (barre)", fullName: "G Major Barre", category: "major", startFret: 3, fingers: [{ string: 4, fret: 3, finger: 2 }, { string: 3, fret: 3, finger: 3 }, { string: 2, fret: 3, finger: 4 }], barres: [{ fret: 1, fromString: 5, toString: 1, finger: 1 }], muted: [6], open: [] },
  { name: "A (barre)", fullName: "A Major Barre", category: "major", startFret: 5, fingers: [{ string: 5, fret: 3, finger: 3 }, { string: 4, fret: 3, finger: 4 }], barres: [{ fret: 1, fromString: 6, toString: 1, finger: 1 }], muted: [], open: [] },
  { name: "E (barre 7)", fullName: "E Major (7th fret)", category: "major", startFret: 7, fingers: [{ string: 5, fret: 3, finger: 3 }, { string: 4, fret: 3, finger: 4 }], barres: [{ fret: 1, fromString: 6, toString: 1, finger: 1 }], muted: [], open: [] },

  // ============================================================
  // ALTERNATE VOICINGS - Minor (barre shapes)
  // ============================================================
  { name: "Cm (barre)", fullName: "C Minor Barre (8fr)", category: "minor", startFret: 8, fingers: [{ string: 5, fret: 3, finger: 3 }, { string: 4, fret: 3, finger: 4 }], barres: [{ fret: 1, fromString: 6, toString: 1, finger: 1 }], muted: [], open: [] },
  { name: "Dm (barre)", fullName: "D Minor Barre (5fr)", category: "minor", startFret: 5, fingers: [{ string: 4, fret: 3, finger: 3 }, { string: 2, fret: 2, finger: 2 }], barres: [{ fret: 1, fromString: 5, toString: 1, finger: 1 }], muted: [6], open: [] },
  { name: "Em (barre 7)", fullName: "E Minor Barre (7fr)", category: "minor", startFret: 7, fingers: [{ string: 5, fret: 3, finger: 3 }, { string: 4, fret: 3, finger: 4 }], barres: [{ fret: 1, fromString: 6, toString: 1, finger: 1 }], muted: [], open: [] },
  { name: "Am (barre 5)", fullName: "A Minor Barre (5fr)", category: "minor", startFret: 5, fingers: [{ string: 5, fret: 3, finger: 3 }, { string: 4, fret: 3, finger: 4 }], barres: [{ fret: 1, fromString: 6, toString: 1, finger: 1 }], muted: [], open: [] },

  // ============================================================
  // DOMINANT 7b9 CHORDS
  // ============================================================
  { name: "C7b9", fullName: "C 7th Flat 9th", category: "7b9", startFret: 1, fingers: [{ string: 5, fret: 3, finger: 3 }, { string: 4, fret: 2, finger: 1 }, { string: 3, fret: 3, finger: 4 }, { string: 2, fret: 2, finger: 2 }], barres: [], muted: [1, 6], open: [] },
  { name: "D7b9", fullName: "D 7th Flat 9th", category: "7b9", startFret: 1, fingers: [{ string: 3, fret: 2, finger: 2 }, { string: 2, fret: 1, finger: 1 }, { string: 1, fret: 1, finger: 3 }], barres: [], muted: [5, 6], open: [4] },
  { name: "E7b9", fullName: "E 7th Flat 9th", category: "7b9", startFret: 1, fingers: [{ string: 3, fret: 1, finger: 1 }, { string: 5, fret: 2, finger: 2 }, { string: 1, fret: 1, finger: 3 }], barres: [], muted: [], open: [2, 4, 6] },
  { name: "G7b9", fullName: "G 7th Flat 9th", category: "7b9", startFret: 3, fingers: [{ string: 6, fret: 1, finger: 1 }, { string: 5, fret: 3, finger: 3 }, { string: 3, fret: 2, finger: 2 }, { string: 2, fret: 3, finger: 4 }], barres: [], muted: [], open: [4] },
  { name: "A7b9", fullName: "A 7th Flat 9th", category: "7b9", startFret: 5, fingers: [{ string: 6, fret: 1, finger: 1 }, { string: 5, fret: 3, finger: 3 }, { string: 3, fret: 2, finger: 2 }, { string: 2, fret: 3, finger: 4 }], barres: [], muted: [], open: [4] },
  { name: "B7b9", fullName: "B 7th Flat 9th", category: "7b9", startFret: 7, fingers: [{ string: 6, fret: 1, finger: 1 }, { string: 5, fret: 3, finger: 3 }, { string: 3, fret: 2, finger: 2 }, { string: 2, fret: 3, finger: 4 }], barres: [], muted: [], open: [4] },
  { name: "F7b9", fullName: "F 7th Flat 9th", category: "7b9", startFret: 1, fingers: [{ string: 6, fret: 1, finger: 1 }, { string: 5, fret: 3, finger: 3 }, { string: 3, fret: 2, finger: 2 }, { string: 2, fret: 3, finger: 4 }], barres: [], muted: [], open: [4] },
  { name: "Db7b9", fullName: "Db 7th Flat 9th", category: "7b9", startFret: 4, fingers: [{ string: 5, fret: 3, finger: 3 }, { string: 4, fret: 2, finger: 1 }, { string: 3, fret: 3, finger: 4 }, { string: 2, fret: 2, finger: 2 }], barres: [], muted: [1, 6], open: [] },
  { name: "Eb7b9", fullName: "Eb 7th Flat 9th", category: "7b9", startFret: 6, fingers: [{ string: 5, fret: 3, finger: 3 }, { string: 4, fret: 2, finger: 1 }, { string: 3, fret: 3, finger: 4 }, { string: 2, fret: 2, finger: 2 }], barres: [], muted: [1, 6], open: [] },
  { name: "F#7b9", fullName: "F# 7th Flat 9th", category: "7b9", startFret: 2, fingers: [{ string: 6, fret: 1, finger: 1 }, { string: 5, fret: 3, finger: 3 }, { string: 3, fret: 2, finger: 2 }, { string: 2, fret: 3, finger: 4 }], barres: [], muted: [], open: [4] },
  { name: "Ab7b9", fullName: "Ab 7th Flat 9th", category: "7b9", startFret: 4, fingers: [{ string: 6, fret: 1, finger: 1 }, { string: 5, fret: 3, finger: 3 }, { string: 3, fret: 2, finger: 2 }, { string: 2, fret: 3, finger: 4 }], barres: [], muted: [], open: [4] },
  { name: "Bb7b9", fullName: "Bb 7th Flat 9th", category: "7b9", startFret: 1, fingers: [{ string: 5, fret: 3, finger: 3 }, { string: 4, fret: 2, finger: 1 }, { string: 3, fret: 3, finger: 4 }, { string: 2, fret: 2, finger: 2 }], barres: [], muted: [1, 6], open: [] },

  // ============================================================
  // MINOR-MAJOR 7TH CHORDS
  // ============================================================
  { name: "CmMaj7", fullName: "C Minor Major 7th", category: "mMaj7", startFret: 3, fingers: [{ string: 4, fret: 2, finger: 2 }, { string: 3, fret: 3, finger: 4 }, { string: 2, fret: 2, finger: 3 }], barres: [{ fret: 1, fromString: 5, toString: 1, finger: 1 }], muted: [6], open: [] },
  { name: "DmMaj7", fullName: "D Minor Major 7th", category: "mMaj7", startFret: 1, fingers: [{ string: 1, fret: 1, finger: 1 }, { string: 3, fret: 2, finger: 2 }, { string: 2, fret: 2, finger: 3 }], barres: [], muted: [5, 6], open: [4] },
  { name: "EmMaj7", fullName: "E Minor Major 7th", category: "mMaj7", startFret: 1, fingers: [{ string: 5, fret: 2, finger: 2 }, { string: 4, fret: 1, finger: 1 }], barres: [], muted: [], open: [1, 2, 3, 6] },
  { name: "FmMaj7", fullName: "F Minor Major 7th", category: "mMaj7", startFret: 1, fingers: [{ string: 5, fret: 3, finger: 3 }, { string: 4, fret: 2, finger: 2 }], barres: [{ fret: 1, fromString: 6, toString: 1, finger: 1 }], muted: [], open: [] },
  { name: "GmMaj7", fullName: "G Minor Major 7th", category: "mMaj7", startFret: 3, fingers: [{ string: 5, fret: 3, finger: 3 }, { string: 4, fret: 2, finger: 2 }], barres: [{ fret: 1, fromString: 6, toString: 1, finger: 1 }], muted: [], open: [] },
  { name: "AmMaj7", fullName: "A Minor Major 7th", category: "mMaj7", startFret: 1, fingers: [{ string: 2, fret: 1, finger: 1 }, { string: 4, fret: 2, finger: 2 }, { string: 3, fret: 1, finger: 3 }], barres: [], muted: [6], open: [1, 5] },
  { name: "BmMaj7", fullName: "B Minor Major 7th", category: "mMaj7", startFret: 2, fingers: [{ string: 4, fret: 3, finger: 3 }, { string: 3, fret: 2, finger: 2 }, { string: 2, fret: 2, finger: 4 }], barres: [{ fret: 1, fromString: 5, toString: 1, finger: 1 }], muted: [6], open: [] },
  { name: "C#mMaj7", fullName: "C# Minor Major 7th", category: "mMaj7", startFret: 4, fingers: [{ string: 4, fret: 3, finger: 3 }, { string: 3, fret: 2, finger: 2 }, { string: 2, fret: 2, finger: 4 }], barres: [{ fret: 1, fromString: 5, toString: 1, finger: 1 }], muted: [6], open: [] },
  { name: "EbmMaj7", fullName: "Eb Minor Major 7th", category: "mMaj7", startFret: 6, fingers: [{ string: 4, fret: 3, finger: 3 }, { string: 3, fret: 2, finger: 2 }, { string: 2, fret: 2, finger: 4 }], barres: [{ fret: 1, fromString: 5, toString: 1, finger: 1 }], muted: [6], open: [] },
  { name: "F#mMaj7", fullName: "F# Minor Major 7th", category: "mMaj7", startFret: 2, fingers: [{ string: 5, fret: 3, finger: 3 }, { string: 4, fret: 2, finger: 2 }], barres: [{ fret: 1, fromString: 6, toString: 1, finger: 1 }], muted: [], open: [] },
  { name: "G#mMaj7", fullName: "G# Minor Major 7th", category: "mMaj7", startFret: 4, fingers: [{ string: 5, fret: 3, finger: 3 }, { string: 4, fret: 2, finger: 2 }], barres: [{ fret: 1, fromString: 6, toString: 1, finger: 1 }], muted: [], open: [] },
  { name: "BbmMaj7", fullName: "Bb Minor Major 7th", category: "mMaj7", startFret: 1, fingers: [{ string: 4, fret: 2, finger: 2 }, { string: 3, fret: 3, finger: 4 }, { string: 2, fret: 2, finger: 3 }], barres: [{ fret: 1, fromString: 5, toString: 1, finger: 1 }], muted: [6], open: [] },

  // ============================================================
  // AUGMENTED 7TH CHORDS
  // ============================================================
  { name: "Caug7", fullName: "C Augmented 7th", category: "aug7", startFret: 1, fingers: [{ string: 5, fret: 3, finger: 3 }, { string: 4, fret: 2, finger: 1 }, { string: 3, fret: 3, finger: 4 }, { string: 2, fret: 1, finger: 2 }], barres: [], muted: [6], open: [1] },
  { name: "Daug7", fullName: "D Augmented 7th", category: "aug7", startFret: 1, fingers: [{ string: 3, fret: 3, finger: 3 }, { string: 1, fret: 2, finger: 2 }, { string: 2, fret: 1, finger: 1 }], barres: [], muted: [5, 6], open: [4] },
  { name: "Eaug7", fullName: "E Augmented 7th", category: "aug7", startFret: 1, fingers: [{ string: 3, fret: 1, finger: 1 }, { string: 4, fret: 2, finger: 2 }, { string: 5, fret: 2, finger: 3 }], barres: [], muted: [6], open: [1, 2] },
  { name: "Gaug7", fullName: "G Augmented 7th", category: "aug7", startFret: 1, fingers: [{ string: 6, fret: 3, finger: 3 }, { string: 3, fret: 1, finger: 1 }, { string: 1, fret: 1, finger: 2 }], barres: [], muted: [], open: [2, 4, 5] },
  { name: "Aaug7", fullName: "A Augmented 7th", category: "aug7", startFret: 1, fingers: [{ string: 4, fret: 2, finger: 1 }, { string: 3, fret: 2, finger: 2 }, { string: 2, fret: 2, finger: 3 }, { string: 1, fret: 1, finger: 4 }], barres: [], muted: [6], open: [5] },
  { name: "Faug7", fullName: "F Augmented 7th", category: "aug7", startFret: 1, fingers: [{ string: 5, fret: 3, finger: 4 }, { string: 4, fret: 2, finger: 2 }, { string: 3, fret: 2, finger: 3 }], barres: [{ fret: 1, fromString: 2, toString: 1, finger: 1 }], muted: [6], open: [] },
  { name: "Baug7", fullName: "B Augmented 7th", category: "aug7", startFret: 2, fingers: [{ string: 5, fret: 1, finger: 1 }, { string: 4, fret: 3, finger: 3 }, { string: 3, fret: 2, finger: 2 }], barres: [], muted: [1, 6], open: [2] },
  { name: "Dbaug7", fullName: "Db Augmented 7th", category: "aug7", startFret: 4, fingers: [{ string: 5, fret: 3, finger: 3 }, { string: 4, fret: 2, finger: 1 }, { string: 3, fret: 3, finger: 4 }, { string: 2, fret: 1, finger: 2 }], barres: [], muted: [6], open: [1] },
  { name: "Ebaug7", fullName: "Eb Augmented 7th", category: "aug7", startFret: 6, fingers: [{ string: 5, fret: 3, finger: 3 }, { string: 4, fret: 2, finger: 1 }, { string: 3, fret: 3, finger: 4 }, { string: 2, fret: 1, finger: 2 }], barres: [], muted: [6], open: [1] },
  { name: "F#aug7", fullName: "F# Augmented 7th", category: "aug7", startFret: 2, fingers: [{ string: 5, fret: 3, finger: 4 }, { string: 4, fret: 2, finger: 2 }, { string: 3, fret: 2, finger: 3 }], barres: [{ fret: 1, fromString: 2, toString: 1, finger: 1 }], muted: [6], open: [] },
  { name: "Abaug7", fullName: "Ab Augmented 7th", category: "aug7", startFret: 4, fingers: [{ string: 5, fret: 3, finger: 4 }, { string: 4, fret: 2, finger: 2 }, { string: 3, fret: 2, finger: 3 }], barres: [{ fret: 1, fromString: 2, toString: 1, finger: 1 }], muted: [6], open: [] },
  { name: "Bbaug7", fullName: "Bb Augmented 7th", category: "aug7", startFret: 1, fingers: [{ string: 5, fret: 3, finger: 3 }, { string: 4, fret: 2, finger: 1 }, { string: 3, fret: 3, finger: 4 }, { string: 2, fret: 1, finger: 2 }], barres: [], muted: [1, 6], open: [] },
];
