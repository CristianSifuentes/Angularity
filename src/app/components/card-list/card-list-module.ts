import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CardList } from './card-list';

// This module's ENTIRE contents — CardList's class, template and styles —
// live in a separate JS chunk that the browser only downloads the first
// time someone navigates to `/cards`. That split is driven by the
// `import()` in app-routing-module.ts's `loadChildren`, not by anything
// in this file: any module reachable only through a lazy route is
// automatically chunked by the Angular build, no extra config required.
const routes: Routes = [
  { path: '', component: CardList, title: 'Angularity · Signals & Control Flow' },
];

@NgModule({
  declarations: [CardList],
  imports: [RouterModule.forChild(routes)],
})
export class CardListModule {}
