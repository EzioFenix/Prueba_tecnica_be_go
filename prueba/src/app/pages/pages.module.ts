import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { HeaderTitleModule } from '../header-title/header-title.module';
import { CargoOrdersComponent } from './cargo-orders/cargo-orders.component';
import { OrderModule } from '../order/order.module';
import { CargoDetailsComponent } from './cargo-details/cargo-details.component';
import { MatExpansionModule } from '@angular/material/expansion';


@NgModule({
  declarations: [
    UpcomingComponent,
    CargoOrdersComponent,
    CargoDetailsComponent
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    PagesRoutingModule,
    HeaderTitleModule,
    OrderModule
  ]
})
export class PagesModule { }
