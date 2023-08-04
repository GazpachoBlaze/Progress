import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../components/home/home.component';
import { PricepanelComponent } from '../components/pricepanel/pricepanel.component';
import { BootstrapComponent } from '../components/bootstrap/bootstrap.component';
import { bootstrapApplication } from '@angular/platform-browser';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'pricepanel', component: PricepanelComponent },
  { path: 'bootstrap', component: BootstrapComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}

export const routingComponents = [HomeComponent, PricepanelComponent, BootstrapComponent];
