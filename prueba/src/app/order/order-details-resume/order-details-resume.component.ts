import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { IncomingOrdersResponseDTO } from '../../DTOs/incomingOrdersResponseDTO';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-details-resume',
  templateUrl: './order-details-resume.component.html',
  styleUrls: ['./order-details-resume.component.css']
})
export class OrderDetailsResumeComponent implements OnInit, OnDestroy {
  @Input() incomingOrderResponse!: IncomingOrdersResponseDTO;

  public timers: { [key: string]: { timeRemaining: string; isActive: boolean } } = {};
  private intervalId: any;

  public isActiveTimer: boolean = false;
  public hadTemporizer: boolean = false;

  constructor(public datePipe: DatePipe,
    private router: Router,
  ) {}

  navigateCargoDetails(order_number:string){
    this.router.navigate(['/cargo-details', order_number]);
  }

  ngOnInit(): void {
    this.startTimers();
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  startTimers() {
    if (this.intervalId) {
      clearInterval(this.intervalId); // Asegúrate de limpiar intervalos previos
    }
  
    this.intervalId = setInterval(() => {
      const now = new Date().getTime(); // Obtiene la hora actual
  
      this.incomingOrderResponse.result.forEach(order => {
        
        const startTime = new Date(order.destinations[0].start_date).getTime();

        //si se desea sumar 3 años a la fecha de inicio para poder probar el contador
        /*const startTime1 = new Date(order.destinations[0].start_date);
        startTime1.setFullYear(startTime1.getFullYear() + 3);
        const startTime = startTime1.getTime();*/

        const timeDifference = startTime - now;
  
        if (timeDifference <= 0) {
          this.isActiveTimer =false
          this.timers[order.order_number] = {
            timeRemaining: '00:00:00:00',
            isActive: true 
          };
        } else {
          this.isActiveTimer =true
          const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
          const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
          this.timers[order.order_number] = {
            timeRemaining: `${days.toString().padStart(2, '0')}:${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`,
            isActive: false // El botón no está activo mientras el tiempo no haya pasado
          };
        }
      });
    }, 1000); // Actualiza cada segundo
  }
  
}
