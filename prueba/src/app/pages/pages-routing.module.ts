import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { CargoDetailsComponent } from './cargo-details/cargo-details.component';

const routes: Routes = [
  {
    component: UpcomingComponent, path: 'upcoming'
  },
  {
    component: CargoDetailsComponent, path: 'cargo-details/:id'
  },
  {
    path: '**',
    redirectTo: 'upcoming'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
