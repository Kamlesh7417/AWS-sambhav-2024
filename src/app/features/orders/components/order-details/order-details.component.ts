import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectOrders } from '../../store/orders.selectors';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html'
})
export class OrderDetailsComponent {
  @Input() orderId!: string;
  @Output() close = new EventEmitter<void>();

  order$ = this.store.select(selectOrders).pipe(
    map(orders => orders[this.orderId])
  );

  constructor(private store: Store) {}

  onClose() {
    this.close.emit();
  }
}