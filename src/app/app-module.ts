import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';

// CardList, BoxModel and FlowArt are declared in their OWN NgModules
// (card-list-module.ts, box-model-module.ts, flow-art-module.ts), never
// here — that's what lets each be lazy-loaded independently through
// app-routing-module.ts's `loadChildren`. Declaring a lazily-loaded
// component in this eagerly-loaded root module would pull its whole
// chunk back into the initial bundle, defeating the split entirely.
@NgModule({
  declarations: [App],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
