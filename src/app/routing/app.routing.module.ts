import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../components/home/home.component';
import { PricepanelComponent } from '../components/pricepanel/pricepanel.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'pricepanel', component: PricepanelComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}

export const routingComponents = [HomeComponent, PricepanelComponent];
