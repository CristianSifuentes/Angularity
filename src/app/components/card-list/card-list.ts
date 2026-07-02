import { Component, computed, input } from '@angular/core';

// A plain TypeScript interface — this is compile-time only, it produces
// no runtime code. It exists purely so the template and the class agree
// on the shape of a "card" and the compiler can catch typos like
// `card.titel`.
export interface Card {
  id: number;
  title: string;
  description: string;
  tag: string;
}

@Component({
  selector: 'app-card-list',
  standalone: false,
  templateUrl: './card-list.html',
  styleUrl: './card-list.scss',
})
export class CardList {
  // ── Parent → child communication ─────────────────────────────────────
  // `input()` (Angular v17.1+) is the signal-based replacement for the
  // classic `@Input()` decorator. The parent binds it with plain property
  // syntax — `[highlightSeed]="clicks()"` in app.html — and, unlike a
  // decorator field, `highlightSeed` here is itself a *signal*: reading
  // it (`this.highlightSeed()`) automatically makes anything that reads
  // it (like the `computed` below) re-run whenever the parent's value
  // changes. The `0` is the default value used if the parent never binds
  // it at all.
  readonly highlightSeed = input(0);

  // Static demo data. In a real app this would come from an `input()` too,
  // or an async source (HttpClient) piped into a signal via `toSignal`.
  protected readonly cards: readonly Card[] = [
    { id: 1, title: 'Signals', description: 'Fine-grained reactive state — no zone.js required to stay in sync.', tag: 'core' },
    { id: 2, title: 'Control Flow', description: '@if / @for / @switch are compiler-native, no CommonModule import needed.', tag: 'templates' },
    { id: 3, title: 'Standalone', description: 'Components can import their own dependencies directly, no NgModule required.', tag: 'core' },
    { id: 4, title: 'CSS Grid', description: 'Two-dimensional layout: this whole list is one grid container.', tag: 'layout' },
    { id: 5, title: 'Flexbox', description: 'One-dimensional layout: each card below arranges its own content with flex.', tag: 'layout' },
    { id: 6, title: 'Change Detection', description: 'Signals let Angular skip subtrees that provably could not have changed.', tag: 'performance' },
  ];

  // `computed` derives read-only, memoized state from other signals — it
  // is Angular's equivalent of a spreadsheet formula cell: it only
  // recalculates when a signal it actually reads (`highlightSeed` here)
  // changes, and every consumer that reads `featuredIndex()` shares the
  // one cached result instead of each re-running the modulo themselves.
  protected readonly featuredIndex = computed(
    () => this.highlightSeed() % this.cards.length,
  );
}
