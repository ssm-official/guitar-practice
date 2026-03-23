"use client";

import type { ChordData } from "@/lib/chords";

interface Props {
  chord: ChordData;
  size?: number; // overall scale factor, default 1
}

// Layout constants (all in SVG units, scaled by `size`)
const STRINGS = 6;
const FRETS = 5;
const STRING_SPACING = 24;
const FRET_SPACING = 28;
const TOP_PADDING = 28;  // space for open/mute markers
const LEFT_PADDING = 28; // space for fret number label
const DOT_RADIUS = 8;
const MARKER_SIZE = 8;

export function ChordDiagram({ chord, size = 1 }: Props) {
  const gridWidth = (STRINGS - 1) * STRING_SPACING;
  const gridHeight = FRETS * FRET_SPACING;
  const svgWidth = gridWidth + LEFT_PADDING + 16;
  const svgHeight = gridHeight + TOP_PADDING + 16;

  // String X positions: string 6 (low E) is leftmost, string 1 (high E) is rightmost
  const stringX = (s: number) => LEFT_PADDING + (STRINGS - s) * STRING_SPACING;
  // Fret Y positions: fret 1 is at top
  const fretY = (f: number) => TOP_PADDING + f * FRET_SPACING;

  const isOpenPosition = chord.startFret === 1;

  return (
    <div className="flex flex-col items-center gap-1">
      {/* Chord name */}
      <span className="text-lg font-bold text-white">{chord.name}</span>
      <span className="text-xs text-zinc-500 mb-1">{chord.fullName}</span>

      <svg
        width={svgWidth * size}
        height={svgHeight * size}
        viewBox={`0 0 ${svgWidth} ${svgHeight}`}
        className="select-none"
      >
        {/* Nut (thick bar at top for open position) */}
        {isOpenPosition && (
          <rect
            x={LEFT_PADDING - 1}
            y={TOP_PADDING - 3}
            width={gridWidth + 2}
            height={5}
            rx={1}
            fill="#e4e4e7"
          />
        )}

        {/* Fret number label (when not open position) */}
        {!isOpenPosition && (
          <text
            x={LEFT_PADDING - 14}
            y={fretY(0) + FRET_SPACING / 2 + 5}
            textAnchor="middle"
            className="fill-zinc-400 text-xs font-medium"
            fontSize={12}
          >
            {chord.startFret}
          </text>
        )}

        {/* Fret lines (horizontal) */}
        {Array.from({ length: FRETS + 1 }, (_, i) => (
          <line
            key={`fret-${i}`}
            x1={LEFT_PADDING}
            y1={fretY(i)}
            x2={LEFT_PADDING + gridWidth}
            y2={fretY(i)}
            stroke="#52525b"
            strokeWidth={i === 0 && !isOpenPosition ? 2 : 1}
          />
        ))}

        {/* String lines (vertical) */}
        {Array.from({ length: STRINGS }, (_, i) => (
          <line
            key={`string-${i}`}
            x1={LEFT_PADDING + i * STRING_SPACING}
            y1={TOP_PADDING}
            x2={LEFT_PADDING + i * STRING_SPACING}
            y2={fretY(FRETS)}
            stroke="#52525b"
            strokeWidth={1}
          />
        ))}

        {/* Barre indicators */}
        {chord.barres.map((barre, i) => {
          const x1 = stringX(barre.fromString);
          const x2 = stringX(barre.toString);
          const y = fretY(barre.fret - 1) + FRET_SPACING / 2;
          return (
            <g key={`barre-${i}`}>
              <rect
                x={Math.min(x1, x2) - DOT_RADIUS}
                y={y - DOT_RADIUS}
                width={Math.abs(x2 - x1) + DOT_RADIUS * 2}
                height={DOT_RADIUS * 2}
                rx={DOT_RADIUS}
                fill="#22d3ee"
              />
              {barre.finger && (
                <text
                  x={(x1 + x2) / 2}
                  y={y + 4}
                  textAnchor="middle"
                  fontSize={11}
                  fontWeight="bold"
                  className="fill-zinc-950"
                >
                  {barre.finger}
                </text>
              )}
            </g>
          );
        })}

        {/* Finger dots */}
        {chord.fingers.map((f, i) => {
          const cx = stringX(f.string);
          const cy = fretY(f.fret - 1) + FRET_SPACING / 2;
          return (
            <g key={`finger-${i}`}>
              <circle cx={cx} cy={cy} r={DOT_RADIUS} fill="#22d3ee" />
              {f.finger !== undefined && f.finger > 0 && (
                <text
                  x={cx}
                  y={cy + 4}
                  textAnchor="middle"
                  fontSize={11}
                  fontWeight="bold"
                  className="fill-zinc-950"
                >
                  {f.finger}
                </text>
              )}
            </g>
          );
        })}

        {/* Open string markers (O) */}
        {chord.open.map((s) => (
          <circle
            key={`open-${s}`}
            cx={stringX(s)}
            cy={TOP_PADDING - 14}
            r={MARKER_SIZE / 2 + 1}
            fill="none"
            stroke="#a1a1aa"
            strokeWidth={1.5}
          />
        ))}

        {/* Muted string markers (X) */}
        {chord.muted.map((s) => {
          const cx = stringX(s);
          const cy = TOP_PADDING - 14;
          const d = MARKER_SIZE / 2;
          return (
            <g key={`mute-${s}`} stroke="#71717a" strokeWidth={1.5} strokeLinecap="round">
              <line x1={cx - d} y1={cy - d} x2={cx + d} y2={cy + d} />
              <line x1={cx + d} y1={cy - d} x2={cx - d} y2={cy + d} />
            </g>
          );
        })}

        {/* String labels at bottom */}
        {["E", "A", "D", "G", "B", "e"].map((label, i) => (
          <text
            key={`label-${i}`}
            x={LEFT_PADDING + i * STRING_SPACING}
            y={fretY(FRETS) + 14}
            textAnchor="middle"
            fontSize={9}
            className="fill-zinc-600"
          >
            {label}
          </text>
        ))}
      </svg>
    </div>
  );
}
