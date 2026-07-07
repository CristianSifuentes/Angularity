import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BoxModel } from './box-model';

// Same lazy-chunk story as card-list-module.ts: this feature is invisible
// to the initial bundle until the router actually activates `/box-model`.
const routes: Routes = [
  { path: '', component: BoxModel, title: 'Angularity · The Box Model' },
];

@NgModule({
  declarations: [BoxModel],
  imports: [RouterModule.forChild(routes)],
})
export class BoxModelModule {}
