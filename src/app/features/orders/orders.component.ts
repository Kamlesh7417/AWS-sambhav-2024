import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadOrders, setFilters, setPage } from './store/orders.actions';
import { 
  selectOrders, 
  selectOrdersLoading, 
  selectOrdersFilters, 
  selectOrdersPagination 
} from './store/orders.selectors';
import { Order } from './services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html'
})
export class OrdersComponent implements OnInit {
  orders$: Observable<{ [key: string]: Order }> = this.store.select(selectOrders);
  loading$: Observable<boolean> = this.store.select(selectOrdersLoading);
  filters$ = this.store.select(selectOrdersFilters);
  pagination$ = this.store.select(selectOrdersPagination);

  selectedOrderId: string | null = null;
  statuses = ['Open', 'Processing', 'Shipped'];
  orders: { [key: string]: Order } = {};

  filters = {
    dateRange: '',
    customDateRange: { start: null as Date | null, end: null as Date | null },
    status: '',
    search: ''
  };

  pagination = {
    currentPage: 1,
    totalPages: 1,
    itemsPerPage: 10
  };

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(loadOrders());

    this.orders$.subscribe(orders => {
      this.orders = orders;
    });
    this.filters$.subscribe(filters => this.filters = filters);
    this.pagination$.subscribe(pagination => this.pagination = pagination);
  }

  onFiltersChange() {
    this.store.dispatch(setFilters({ filters: this.filters }));
  }

  onPageChange(page: number) {
    this.store.dispatch(setPage({ page }));
  }

  onOrderClick(order: Order) {
    this.selectedOrderId = order.order_id;
  }

  closeOrderDetails() {
    this.selectedOrderId = null;
  }

  get displayedOrders(): Order[] {
    let filteredOrders = Object.values(this.orders || {});

    // Apply filters
    if (this.filters.search) {
      const searchTerm = this.filters.search.toLowerCase();
      filteredOrders = filteredOrders.filter(order => 
        order.order_id.toLowerCase().includes(searchTerm)
      );
    }

    if (this.filters.status) {
      filteredOrders = filteredOrders.filter(order => 
        order.order_status === this.filters.status
      );
    }

    // Update total pages
    this.pagination.totalPages = Math.ceil(filteredOrders.length / this.pagination.itemsPerPage);

    // Apply pagination
    const start = (this.pagination.currentPage - 1) * this.pagination.itemsPerPage;
    const end = start + this.pagination.itemsPerPage;
    return filteredOrders.slice(start, end);
  }
}