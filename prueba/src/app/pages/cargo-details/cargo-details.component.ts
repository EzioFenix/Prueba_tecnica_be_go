import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../../order/order.service';
import { Result } from '../../DTOs/incomingOrdersResponseDTO';
import { AllOrdersResponseDTO, Driver} from '../../DTOs/allOrdersDTO';
import { contactDataDTO } from '../../DTOs/contactDataDto';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-cargo-details',
  templateUrl: './cargo-details.component.html',
  styleUrls: ['./cargo-details.component.css']
})
export class CargoDetailsComponent implements OnInit {
  order_number!: string;

  orderData!: Result[];
  driverData!: AllOrdersResponseDTO;

  isDriverFound!: boolean;
  isReferenceFound: boolean=false;


  //flags
  lastIndexDropOff: number=0;
  lastIndexPickUp: number=0;

  contactData:contactDataDTO=new contactDataDTO();
  isActivePickup: boolean=true;

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService,
    public datePipe: DatePipe
  ) { 

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.order_number = params.get('id')!;
      this.orderService.getIncomingOrders().subscribe(response => {
        this.orderData = response.result.filter(order => order.order_number === this.order_number);
        console.log(this.orderData);
        // buscar al conducotr
        this.orderService.getAllOrders().subscribe(response => {
          this.driverData= response
          
          if (this.orderData[0]._id=== this.driverData.result._id){
            this.calculateDataDerivate();
            console.log('is reference found');
            this.isReferenceFound = true;
          }
          else{
            console.error('Reference Not found');
            this.isReferenceFound = false;
          }
          this.onPickupClick();
        });
        
      });
    });
  }

  calculateDataDerivate(): void {
    this.lastIndexDropOff= this.driverData.result.status_list.dropoff.filter(dropoff => dropoff.active === true).length;
    this.lastIndexPickUp= this.driverData.result.status_list.pickup.filter(pickup => pickup.active === true).length;
  }

  onPickupClick(): void {
    this.isActivePickup=true;
    this.contactData.title = 'Pickup data';
    this.contactData.direction = this.orderData[0].destinations[0].address;
    this.contactData.date=this.orderData[0].start_date
    if(this.isReferenceFound){
      this.contactData.phone=this.driverData.result.destinations[0].contact_info.telephone;
      this.contactData.email=this.driverData.result.destinations[0].contact_info.email;
    }
  }
  onDropoffClick(): void {
    this.isActivePickup=false;
    this.contactData.title = 'Dropoff data';
    this.contactData.direction = this.orderData[0].destinations[1].address;
    this.contactData.date=this.orderData[0].end_date
    if(this.isReferenceFound){
      this.contactData.phone=this.driverData.result.destinations[1].contact_info.telephone;
      this.contactData.email=this.driverData.result.destinations[1].contact_info.email;
    }
  }

  trackMe(){
    console.log("Track Order")
  }
}
