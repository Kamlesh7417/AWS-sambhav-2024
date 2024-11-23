import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '@shared/shared.module';
import { OrdersComponent } from './orders.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { ordersReducer } from './store/orders.reducer';
import { OrdersEffects } from './store/orders.effects';

@NgModule({
  declarations: [
    OrdersComponent,
    OrderDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', component: OrdersComponent }
    ]),
    StoreModule.forFeature('orders', ordersReducer),
    EffectsModule.forFeature([OrdersEffects])
  ]
})
export class OrdersModule { }