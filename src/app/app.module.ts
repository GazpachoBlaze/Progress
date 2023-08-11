import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './routing/app.routing.module';

import { AppComponent } from './app.component';
import { GridSystemComponent } from './components/grid-system/grid-system.component';




@NgModule({
  declarations: [AppComponent, routingComponents, GridSystemComponent,],

  imports: [BrowserModule, AppRoutingModule],

  providers: [],

  bootstrap: [AppComponent],
})


export class AppModule {}
