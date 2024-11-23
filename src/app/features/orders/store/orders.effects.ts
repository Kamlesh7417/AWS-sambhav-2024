import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import * as OrdersActions from './orders.actions';
import { OrdersService } from '../services/orders.service';

@Injectable()
export class OrdersEffects {
  loadOrders$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OrdersActions.loadOrders),
      mergeMap(() => this.ordersService.getOrders()
        .pipe(
          map(orders => OrdersActions.loadOrdersSuccess({ orders })),
          catchError(error => of(OrdersActions.loadOrdersFailure({ error })))
        ))
    )
  );

  constructor(
    private actions$: Actions,
    private ordersService: OrdersService
  ) {}
}