import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FlowArt } from './flow-art';

// Same lazy-chunk story as card-list-module.ts: FlowArt's per-frame grid
// math and CSS never ship to a visitor who only ever looks at `/cards`.
const routes: Routes = [
  { path: '', component: FlowArt, title: 'Angularity · Flow Art' },
];

@NgModule({
  declarations: [FlowArt],
  imports: [RouterModule.forChild(routes)],
})
export class FlowArtModule {}
