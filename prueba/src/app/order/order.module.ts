import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule, DatePipe } from '@angular/common';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrderDetailsResumeComponent } from './order-details-resume/order-details-resume.component';
import { SearchOrderComponent } from './search-order/search-order.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';





@NgModule({
  declarations: [
    OrderDetailsComponent,
    OrderDetailsResumeComponent,
    SearchOrderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    OrderDetailsResumeComponent,
    SearchOrderComponent
  ],
  providers: [
    DatePipe,
    AsyncPipe
  ]
}) // <- Error: este paréntesis debería ser "]}",
export class OrderModule { }
