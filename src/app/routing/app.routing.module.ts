import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../components/home/home.component';
import { PricepanelComponent } from '../components/pricepanel/pricepanel.component';
import { BootstrapComponent } from '../components/bootstrap/bootstrap.component';
import { GridSystemComponent } from '../components/grid-system/grid-system.component';
import { FormComponent } from '../components/form/form.component';
import { CandyComponent } from '../components/candy/candy.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'pricepanel', component: PricepanelComponent },
  { path: 'bootstrap', component: BootstrapComponent },
  {path: 'gridsystem', component: GridSystemComponent},
  {path: 'form', component: FormComponent},
  {path: 'candy', component: CandyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}

export const routingComponents = [HomeComponent, PricepanelComponent, BootstrapComponent, GridSystemComponent, FormComponent, CandyComponent];
