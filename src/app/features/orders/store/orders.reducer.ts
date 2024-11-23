import { createReducer, on } from '@ngrx/store';
import * as OrdersActions from './orders.actions';
import { Order } from '../services/orders.service';

export interface OrdersState {
  orders: { [key: string]: Order };
  loading: boolean;
  error: any;
  filters: {
    dateRange: string;
    customDateRange: { start: Date | null; end: Date | null };
    status: string;
    search: string;
  };
  pagination: {
    currentPage: number;
    totalPages: number;
    itemsPerPage: number;
  };
}

export const initialState: OrdersState = {
  orders: {},
  loading: false,
  error: null,
  filters: {
    dateRange: '',
    customDateRange: { start: null, end: null },
    status: '',
    search: ''
  },
  pagination: {
    currentPage: 1,
    totalPages: 1,
    itemsPerPage: 10
  }
};

export const ordersReducer = createReducer(
  initialState,
  on(OrdersActions.loadOrders, state => ({
    ...state,
    loading: true
  })),
  on(OrdersActions.loadOrdersSuccess, (state, { orders }) => ({
    ...state,
    loading: false,
    orders: orders.reduce((acc, order) => ({
      ...acc,
      [order.order_id]: order
    }), {})
  })),
  on(OrdersActions.loadOrdersFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
  on(OrdersActions.setFilters, (state, { filters }) => ({
    ...state,
    filters,
    pagination: {
      ...state.pagination,
      currentPage: 1
    }
  })),
  on(OrdersActions.setPage, (state, { page }) => ({
    ...state,
    pagination: {
      ...state.pagination,
      currentPage: page
    }
  }))
);