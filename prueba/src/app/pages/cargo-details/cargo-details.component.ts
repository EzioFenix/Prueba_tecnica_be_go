import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cargo-details',
  templateUrl: './cargo-details.component.html',
  styleUrls: ['./cargo-details.component.css']
})
export class CargoDetailsComponent implements OnInit {
  order_number!: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.order_number = params.get('id')!;
    });
  }

  onPickupClick(): void {
    console.log('Pickup container clicked');
  }

  onDropoffClick(): void {
    console.log('Dropoff container clicked');
  }
}
