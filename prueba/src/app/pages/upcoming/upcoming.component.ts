import { Component } from '@angular/core';
import { OrderService } from '../../order/order.service';
import { IncomingOrdersResponseDTO } from '../../DTOs/incomingOrdersResponseDTO';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css'] 
})
export class UpcomingComponent {
  incomingOrderResponse!: IncomingOrdersResponseDTO;
  readonlyIncomingOrderResponse!: IncomingOrdersResponseDTO; 

  constructor(private orderService: OrderService) {
    this.loadIncomingOrders();
  }

  private loadIncomingOrders(): void {
    this.orderService.getIncomingOrders().subscribe((response: IncomingOrdersResponseDTO) => {
      this.readonlyIncomingOrderResponse = { ...response }; 
      this.incomingOrderResponse = { ...response };
    });
  }

  getListNumberOrders(): string[] {
    return this.readonlyIncomingOrderResponse.result.map(order => order.order_number);
  }

  selectedOrder(orderNumber: string): void {
    if (orderNumber === '') {
      this.resetOrders();
    } else {
      this.incomingOrderResponse.result = this.readonlyIncomingOrderResponse.result.filter(
        order => order.order_number === orderNumber
      );
    }
  }

  private resetOrders(): void {
    this.incomingOrderResponse = { ...this.readonlyIncomingOrderResponse }; 
  }
}
