import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { AllOrdersResponseDTO } from '../DTOs/allOrdersDTO';
import { IncomingOrdersResponseDTO } from '../DTOs/incomingOrdersResponseDTO';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() {
   }

   getAllOrders():Observable<AllOrdersResponseDTO>{
    let path ='https://129bc152-6319-4e38-b755-534a4ee46195.mock.pstmn.io/orders';
    return from(fetch(path).then(response => {
      if (!response.ok) {
        throw new Error('Error en la solicitud: ' + response.statusText);
      }
      return response.json();
    }));
   }

   getIncomingOrders():Observable<IncomingOrdersResponseDTO>{
    let path = 'https://129bc152-6319-4e38-b755-534a4ee46195.mock.pstmn.io/orders/upcoming';
    return from(fetch(path).then(response => {
      if (!response.ok) {
        throw new Error('Error en la solicitud: ' + response.statusText);
      }
      return response.json();
    }));
   }


}
