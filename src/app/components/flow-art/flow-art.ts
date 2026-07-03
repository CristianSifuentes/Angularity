import { Component, computed, signal } from '@angular/core';

// ─────────────────────────────────────────────────────────────────────────
// FLOW ART — a generative mosaic used as a single stage for the three
// modern control-flow blocks at once:
//   • `@for`    — renders one tile per active cell, `@empty` renders the
//                 canvas' empty state when a pattern/density combo yields
//                 zero active cells (try dragging density to 0).
//   • `@switch` — picks which of five tile shapes to draw, AND (in a
//                 second, unrelated block) picks the artist's-statement
//                 copy for whichever pattern is selected.
//   • `@if`     — adds a decorative "halo" only to the hottest tiles.
//
// Everything below is deliberately pure arithmetic — no `Math.random()`,
// no `setInterval`. A `computed` MUST be a pure function of the signals it
// reads (Angular may re-run it any number of times and expects the same
// output for the same inputs), so "randomness" here comes from a seeded
// hash instead: same (row, col, seed) always maps to the same value.
// Perceived motion comes entirely from CSS (`animation-delay` staggered
// per tile) — the data is static per frame, only the stylesheet moves.
// ─────────────────────────────────────────────────────────────────────────

export type FlowPattern = 'wave' | 'spiral' | 'pulse' | 'checker' | 'random';
export type FlowTheme = 'aurora' | 'sunset' | 'ocean' | 'mono';
type FlowShape = 'circle' | 'diamond' | 'triangle' | 'square' | 'ring';

export interface FlowCell {
  readonly id: string;
  readonly row: number;
  readonly col: number;
  readonly shape: FlowShape;
  readonly intensity: number; // 0..1 — drives color/scale in the template
  readonly halo: boolean; // top-decile cells get the extra glow (@if)
  readonly delay: number; // seconds — staggers the CSS animation per tile
}

interface PatternDef {
  readonly id: FlowPattern;
  readonly label: string;
  readonly glyph: string;
}

interface ThemeDef {
  readonly id: FlowTheme;
  readonly label: string;
  readonly hue: number; // base HSL hue; the template adds intensity on top
}

const SHAPES: readonly FlowShape[] = ['circle', 'diamond', 'triangle', 'square', 'ring'];

// Classic "shader hash": deterministic pseudo-randomness from three
// numbers via a wildly non-linear `sin`, folded back into 0..1 by
// dropping the integer part. Same inputs always → same output, which is
// exactly the purity `computed` requires.
function hash01(row: number, col: number, seed: number): number {
  const n = Math.sin(row * 12.9898 + col * 78.233 + seed * 37.719) * 43758.5453;
  return n - Math.floor(n);
}

function waveIntensity(row: number, col: number, cols: number, rows: number): number {
  const x = col / Math.max(cols - 1, 1);
  const y = row / Math.max(rows - 1, 1);
  return (Math.sin(x * Math.PI * 4 + y * Math.PI * 2) + 1) / 2;
}

function spiralIntensity(row: number, col: number, cols: number, rows: number): number {
  const cx = (cols - 1) / 2;
  const cy = (rows - 1) / 2;
  const dx = col - cx;
  const dy = row - cy;
  const angle = Math.atan2(dy, dx) / (Math.PI * 2); // -0.5..0.5
  const dist = Math.hypot(dx, dy) / (Math.hypot(cx, cy) || 1); // 0..~1
  const v = (angle + dist * 2.5) % 1;
  return v < 0 ? v + 1 : v;
}

function pulseIntensity(row: number, col: number, cols: number, rows: number): number {
  const cx = (cols - 1) / 2;
  const cy = (rows - 1) / 2;
  const dist = Math.hypot(col - cx, row - cy);
  const ring = (dist / 1.4) % 1;
  return 1 - Math.abs(ring - 0.5) * 2; // peaks mid-ring, troughs at the edges
}

function checkerIntensity(row: number, col: number, seed: number): number {
  const base = (row + col) % 2 === 0 ? 0.85 : 0.15;
  return base + (hash01(row, col, seed) - 0.5) * 0.1; // jitter to break ties
}

function intensityFor(
  pattern: FlowPattern,
  row: number,
  col: number,
  cols: number,
  rows: number,
  seed: number,
): number {
  switch (pattern) {
    case 'wave':
      return waveIntensity(row, col, cols, rows);
    case 'spiral':
      return spiralIntensity(row, col, cols, rows);
    case 'pulse':
      return pulseIntensity(row, col, cols, rows);
    case 'checker':
      return checkerIntensity(row, col, seed);
    case 'random':
      return hash01(row, col, seed);
  }
}

// How long (in seconds) this tile waits before its CSS animation starts —
// chosen per pattern so the stagger reads as motion *through* the shape
// the data already describes (outward from center for spiral/pulse, left
// to right for wave, diagonally for checker, all-over for random).
function delayFor(
  pattern: FlowPattern,
  row: number,
  col: number,
  cols: number,
  rows: number,
  seed: number,
): number {
  switch (pattern) {
    case 'wave':
      return col * 0.05;
    case 'spiral':
    case 'pulse': {
      const cx = (cols - 1) / 2;
      const cy = (rows - 1) / 2;
      return Math.hypot(col - cx, row - cy) * 0.08;
    }
    case 'checker':
      return ((row + col) % 2) * 0.15;
    case 'random':
      return hash01(row, col, seed + 1) * 0.6;
  }
}

const PATTERNS: readonly PatternDef[] = [
  { id: 'wave', label: 'Wave', glyph: '〜' },
  { id: 'spiral', label: 'Spiral', glyph: '@' },
  { id: 'pulse', label: 'Pulse', glyph: '◎' },
  { id: 'checker', label: 'Checker', glyph: '▦' },
  { id: 'random', label: 'Random', glyph: '✦' },
];

const THEMES: readonly ThemeDef[] = [
  { id: 'aurora', label: 'Aurora', hue: 152 },
  { id: 'sunset', label: 'Sunset', hue: 18 },
  { id: 'ocean', label: 'Ocean', hue: 202 },
  { id: 'mono', label: 'Mono', hue: 220 },
];

@Component({
  selector: 'app-flow-art',
  standalone: false,
  templateUrl: './flow-art.html',
  styleUrl: './flow-art.scss',
})
export class FlowArt {
  // ── Plain data for `@for`-generated UI (buttons), not signals: these
  // lists never change at runtime, only the *selection* does. ───────────
  protected readonly patterns = PATTERNS;
  protected readonly themes = THEMES;

  // ── Interactive state ────────────────────────────────────────────────
  protected readonly cols = signal(16);
  protected readonly rows = signal(9);
  protected readonly pattern = signal<FlowPattern>('wave');
  protected readonly theme = signal<FlowTheme>('aurora');
  protected readonly density = signal(0.55); // 0..1 — fraction of tiles "lit"
  protected readonly seed = signal(1); // bumped by "Reshuffle" to reroll random/checker

  protected readonly currentTheme = computed(
    () => this.themes.find((t) => t.id === this.theme())!,
  );

  // Every candidate position (row × col) with its computed shape/intensity,
  // BEFORE the density cutoff is applied — kept separate from `cells` below
  // so `activeCount` can be compared against the true grid size.
  private readonly grid = computed<FlowCell[]>(() => {
    const cols = this.cols();
    const rows = this.rows();
    const pattern = this.pattern();
    const seed = this.seed();
    const out: FlowCell[] = [];

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const intensity = intensityFor(pattern, row, col, cols, rows, seed);
        out.push({
          id: `${row}-${col}`,
          row,
          col,
          shape: SHAPES[Math.min(Math.floor(intensity * SHAPES.length), SHAPES.length - 1)],
          intensity,
          halo: intensity > 0.82,
          delay: delayFor(pattern, row, col, cols, rows, seed),
        });
      }
    }
    return out;
  });

  // What `@for` actually iterates over. Cells below the density threshold
  // are dropped from the array entirely (not just hidden) — at density 0
  // this is `[]`, which is what drives the template's `@empty` block.
  protected readonly cells = computed(() =>
    this.grid().filter((cell) => cell.intensity >= 1 - this.density()),
  );

  protected readonly totalCount = computed(() => this.cols() * this.rows());
  protected readonly activeCount = computed(() => this.cells().length);
  protected readonly coveragePercent = computed(() =>
    Math.round((this.activeCount() / this.totalCount()) * 100),
  );

  protected selectPattern(id: FlowPattern): void {
    this.pattern.set(id);
  }

  protected selectTheme(id: FlowTheme): void {
    this.theme.set(id);
  }

  protected setDensity(event: Event): void {
    this.density.set((event.target as HTMLInputElement).valueAsNumber);
  }

  protected reshuffle(): void {
    this.seed.update((s) => s + 1);
  }
}
