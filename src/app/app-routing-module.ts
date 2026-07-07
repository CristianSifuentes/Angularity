import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// ─────────────────────────────────────────────────────────────────────────
// Each feature below is declared with `loadChildren`, never a plain
// `component:` reference. `loadChildren` takes a function returning a
// dynamic `import()` — the Angular build treats that `import()` exactly
// like a code-splitting point in plain webpack/esbuild, emitting the
// target module (and everything only IT imports) as its own lazy chunk.
// The initial bundle therefore contains app-module/app-routing-module and
// nothing feature-specific: the box-model chunk, for instance, isn't
// fetched until a visitor actually navigates to `/box-model`, and a
// visitor who only ever looks at `/cards` never pays for it at all.
//
// This is the classic (pre-standalone-components) lazy-loading pattern:
// each feature owns a small `*-module.ts` (see e.g.
// components/card-list/card-list-module.ts) that declares the component
// and wires its own child route via `RouterModule.forChild(...)`. It
// still applies unchanged in an NgModule-based app like this one, where
// `standalone: false` on every component rules out the newer
// `loadComponent` shorthand.
// ─────────────────────────────────────────────────────────────────────────
const routes: Routes = [
  // `pathMatch: 'full'` on an empty path means "match ONLY when the whole
  // URL is empty", not "empty path is a prefix of everything" (the
  // default, `'prefix'`) — without it every route in this file would
  // also match `''` and the redirect would win before anything else got
  // a chance to.
  { path: '', pathMatch: 'full', redirectTo: 'cards' },

  {
    path: 'cards',
    loadChildren: () =>
      import('./components/card-list/card-list-module').then((m) => m.CardListModule),
  },
  {
    path: 'box-model',
    loadChildren: () =>
      import('./components/box-model/box-model-module').then((m) => m.BoxModelModule),
  },
  {
    path: 'flow-art',
    loadChildren: () =>
      import('./components/flow-art/flow-art-module').then((m) => m.FlowArtModule),
  },

  // Catch-all: any URL that isn't one of the routes above (typo, stale
  // bookmark, removed feature) lands back on the default feature instead
  // of Angular's router silently rendering an empty outlet. Must stay
  // LAST — routes are matched top-to-bottom and `**` matches literally
  // anything.
  { path: '**', redirectTo: 'cards' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // Every feature above renders as a top-level page, so a navigation
      // between them should read as "new page" — scrolled to the top —
      // while the browser's own Back/Forward still restores wherever the
      // user had scrolled to. That split is exactly what `'enabled'` does:
      // top on `Navigation.NEXT`/`.PUSH`, restored position on `.POP`.
      scrollPositionRestoration: 'enabled',

      // Anchor-link navigation (`/cards#some-section`) scrolls that
      // element into view instead of only the router changing state with
      // no visual scroll at all.
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
