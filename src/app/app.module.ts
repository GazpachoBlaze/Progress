import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './routing/app.routing.module';


import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home.component';
import { PricepanelComponent } from './components/pricepanel/pricepanel.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PricepanelComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule
  ],

  providers: [],

  bootstrap: [AppComponent]

})
export class AppModule { }
