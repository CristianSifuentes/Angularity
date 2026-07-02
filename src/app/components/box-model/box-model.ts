import { Component, computed, signal } from '@angular/core';

// Mirrors the CSS `box-sizing` property's two legal values — using a
// union type (not `string`) means the template and the toggle logic
// below can never drift into a third, invalid state.
type BoxSizing = 'content-box' | 'border-box';

@Component({
  selector: 'app-box-model',
  standalone: false,
  templateUrl: './box-model.html',
  styleUrl: './box-model.scss',
})
export class BoxModel {
  // ── Interactive inputs (bound to <input type="range"> in the template) ──
  protected readonly width = signal(200);
  protected readonly height = signal(100);
  protected readonly padding = signal(20);
  protected readonly borderWidth = signal(5);
  protected readonly margin = signal(20);
  protected readonly boxSizing = signal<BoxSizing>('content-box');

  protected readonly isBorderBox = computed(() => this.boxSizing() === 'border-box');

  // ── The actual lesson, expressed as arithmetic ──────────────────────
  // "Modelo de cajas estándar" (content-box, the CSS default): width/
  // height set only the CONTENT box. Padding and border are added on
  // top, growing the box that's actually visible on screen.
  //
  // "Modelo de cajas alternativo" (border-box): width/height instead
  // pin the BORDER box — the visible size never changes as you add
  // padding/border, because they're carved out of the content area
  // instead of added beyond it.
  //
  // Same three inputs (width, padding, borderWidth); which one the
  // formula solves for is entirely decided by `boxSizing()`.
  protected readonly renderedContentWidth = computed(() =>
    this.isBorderBox()
      ? Math.max(this.width() - this.padding() * 2 - this.borderWidth() * 2, 0)
      : this.width(),
  );
  protected readonly renderedContentHeight = computed(() =>
    this.isBorderBox()
      ? Math.max(this.height() - this.padding() * 2 - this.borderWidth() * 2, 0)
      : this.height(),
  );

  // The total border-edge-to-border-edge size — what the standard model
  // *adds up to*, and exactly what border-box *fixes* width/height at.
  protected readonly totalWidth = computed(() =>
    this.isBorderBox() ? this.width() : this.width() + this.padding() * 2 + this.borderWidth() * 2,
  );
  protected readonly totalHeight = computed(() =>
    this.isBorderBox() ? this.height() : this.height() + this.padding() * 2 + this.borderWidth() * 2,
  );

  protected toggleBoxSizing(): void {
    this.boxSizing.update((mode) => (mode === 'content-box' ? 'border-box' : 'content-box'));
  }

  // Angular re-runs event-binding expressions with `$event` in scope,
  // but a native `<input>`'s `event.target` is typed as `EventTarget`,
  // not `HTMLInputElement` — this helper centralizes the one cast the
  // whole template needs instead of repeating `$any($event.target)`
  // everywhere.
  protected fromRange(event: Event): number {
    return (event.target as HTMLInputElement).valueAsNumber;
  }

  // ── Margin-collapse mini demo ────────────────────────────────────────
  // Two adjacent block-level boxes in normal flow: their touching
  // vertical margins collapse into ONE margin — the size of the LARGER
  // of the two — rather than summing. This only happens for vertical
  // margins between block siblings in normal flow (not flex/grid items,
  // not horizontal margins), which is exactly why `.stack` below is a
  // plain block container and not `display: flex`.
  protected readonly marginBottomA = signal(50);
  protected readonly marginTopB = signal(30);

  protected readonly collapsedGap = computed(() =>
    Math.max(this.marginBottomA(), this.marginTopB()),
  );
}
