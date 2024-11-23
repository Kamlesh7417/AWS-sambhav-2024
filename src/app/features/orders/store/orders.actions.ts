import { createAction, props } from '@ngrx/store';

export const loadOrders = createAction('[Orders] Load Orders');
export const loadOrdersSuccess = createAction(
  '[Orders] Load Orders Success',
  props<{ orders: any[] }>()
);
export const loadOrdersFailure = createAction(
  '[Orders] Load Orders Failure',
  props<{ error: any }>()
);

export const setFilters = createAction(
  '[Orders] Set Filters',
  props<{ filters: any }>()
);

export const setPage = createAction(
  '[Orders] Set Page',
  props<{ page: number }>()
);