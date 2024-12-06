import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-search-order',
  templateUrl: './search-order.component.html',
  styleUrls: ['./search-order.component.scss'],
})
export class SearchOrderComponent {
  @Input() incomingOrderNumberList: string[] = [];
  @Output() orderSelected = new EventEmitter<string>();

  searchControl = new FormControl('');
  filteredOrders$!: Observable<string[]>;
  private originalList: string[] = [];

  ngOnInit() {
    this.originalList = [...this.incomingOrderNumberList];

    this.filteredOrders$ = this.searchControl.valueChanges.pipe(
      startWith(''),
      map(searchText => this.filterOrders(searchText || ''))
    );
  }

  private filterOrders(searchText: string): string[] {
    if (searchText==='') {
      this.orderSelected.emit('');
    }
    const filterValue = searchText.toLowerCase();
    return this.originalList.filter(order =>
      order.toLowerCase().includes(filterValue)
    );
  }

  selectOrder(order: string) {
    this.orderSelected.emit(order);
    this.searchControl.setValue(order);
  }
}
