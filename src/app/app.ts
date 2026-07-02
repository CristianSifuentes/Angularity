// ─────────────────────────────────────────────────────────────────────────
// `Component` gives us the `@Component` decorator (metadata about the view).
// `signal` / `computed` are Angular's reactive primitives (since v16+):
// a `signal` is a mutable, observable container; `computed` derives a new
// read-only signal from other signals and re-evaluates only when a
// dependency it actually read last time changes.
// ─────────────────────────────────────────────────────────────────────────
import { Component, computed, signal } from '@angular/core';

@Component({
  // The tag you type in HTML to render this component: <app-root></app-root>.
  // Angular resolves it like a custom element, but it is NOT a native
  // Web Component — it only works inside an Angular application context.
  selector: 'app-root',

  // View (template) and styles live in separate files. Angular inlines
  // both at build time, so there is no runtime cost to splitting them —
  // it's purely for readability/tooling (syntax highlighting, HTML/SCSS
  // linters, etc.). The alternative is `template: '...'` / `styles: [...]`
  // written inline in this same decorator.
  templateUrl: './app.html',
  styleUrl: './app.scss',

  // `standalone: false` opts this component OUT of Angular's default
  // (v19+) standalone mode and back into the classic NgModule model:
  // it must be declared in an `@NgModule({ declarations: [...] })`
  // (see app-module.ts) instead of importing its own dependencies
  // directly. Everything below still works identically either way —
  // signals, templates and styles are independent of that choice.
  standalone: false,
})
export class App {
  // `protected readonly` because:
  //   - `protected`: usable in the template (app.html) and by subclasses,
  //     but not from outside this class — templates are compiled as if
  //     they were a method of the component, so `protected` is visible
  //     to them while staying out of the component's public API.
  //   - `readonly`: the *binding* to the signal never changes; the value
  //     *inside* it does, via `.set()` / `.update()`, which is exactly
  //     the point — signals are mutable containers, not mutable variables.
  protected readonly title = signal('Angularity');

  // A second piece of state, used to demonstrate event binding + reactive
  // derivation in the template below.
  protected readonly clicks = signal(0);

  // `computed` re-runs its callback lazily, only when read, and only
  // recomputes if `clicks` actually changed since the last read — it's
  // memoized, not a plain getter re-run on every change detection pass.
  protected readonly hasBeenClicked = computed(() => this.clicks() > 0);

  // Plain method invoked from `(click)` in the template. Calling
  // `.update()` (rather than `.set()`) gives us the previous value so we
  // can derive the next one without a separate read.
  protected increment(): void {
    this.clicks.update((current) => current + 1);
  }
}
