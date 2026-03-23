// Standard guitar tuning frequencies
export const GUITAR_STRINGS = [
  { note: "E2", freq: 82.41, label: "6th", name: "E" },
  { note: "A2", freq: 110.0, label: "5th", name: "A" },
  { note: "D3", freq: 146.83, label: "4th", name: "D" },
  { note: "G3", freq: 196.0, label: "3rd", name: "G" },
  { note: "B3", freq: 246.94, label: "2nd", name: "B" },
  { note: "E4", freq: 329.63, label: "1st", name: "e" },
];

// All note names for chromatic detection
const NOTE_NAMES = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

export interface PitchResult {
  frequency: number;
  note: string;
  octave: number;
  cents: number; // -50 to +50, 0 = perfectly in tune
  closestString: typeof GUITAR_STRINGS[number] | null;
}

export function frequencyToNote(freq: number): PitchResult {
  // A4 = 440Hz, MIDI note 69
  const noteNum = 12 * (Math.log2(freq / 440)) + 69;
  const roundedNote = Math.round(noteNum);
  const cents = Math.round((noteNum - roundedNote) * 100);
  const octave = Math.floor((roundedNote - 12) / 12);
  const noteIndex = ((roundedNote % 12) + 12) % 12;
  const note = NOTE_NAMES[noteIndex];

  // Find closest guitar string
  let closestString = null;
  let minDist = Infinity;
  for (const s of GUITAR_STRINGS) {
    const dist = Math.abs(freq - s.freq);
    if (dist < minDist) {
      minDist = dist;
      closestString = s;
    }
  }
  // Only show closest string if within reasonable range
  if (minDist > 30) closestString = null;

  return { frequency: freq, note, octave, cents, closestString };
}

// Autocorrelation-based pitch detection (YIN-like)
export function detectPitch(buffer: Float32Array, sampleRate: number): number | null {
  const SIZE = buffer.length;

  // Check if there's enough signal
  let rms = 0;
  for (let i = 0; i < SIZE; i++) rms += buffer[i] * buffer[i];
  rms = Math.sqrt(rms / SIZE);
  if (rms < 0.01) return null; // too quiet

  // Autocorrelation
  const correlations = new Float32Array(SIZE);
  for (let lag = 0; lag < SIZE; lag++) {
    let sum = 0;
    for (let i = 0; i < SIZE - lag; i++) {
      sum += buffer[i] * buffer[i + lag];
    }
    correlations[lag] = sum;
  }

  // Find the first dip then the next peak
  let dipped = false;
  let bestLag = -1;
  let bestVal = -1;

  for (let lag = Math.floor(sampleRate / 500); lag < Math.floor(sampleRate / 60); lag++) {
    if (correlations[lag] < correlations[lag - 1]) {
      dipped = true;
    }
    if (dipped && correlations[lag] > bestVal) {
      bestVal = correlations[lag];
      bestLag = lag;
    }
  }

  if (bestLag === -1) return null;

  // Parabolic interpolation for better accuracy
  const prev = correlations[bestLag - 1];
  const curr = correlations[bestLag];
  const next = correlations[bestLag + 1];
  const shift = (prev - next) / (2 * (prev - 2 * curr + next));
  const refinedLag = bestLag + (isFinite(shift) ? shift : 0);

  const freq = sampleRate / refinedLag;

  // Sanity check: guitar range ~60Hz to ~1200Hz
  if (freq < 60 || freq > 1200) return null;

  return freq;
}
