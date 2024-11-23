import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Order {
  order_id: string;
  order_status: string;
  order_placed_timestamp: string;
}

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private apiUrl = 'https://susowh1c2f.execute-api.us-east-1.amazonaws.com/v1/orders';

  constructor(private http: HttpClient) {}

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.apiUrl).pipe(
      map(orders => orders.map(order => ({
        ...order,
        order_status: order.order_status || 'Open' // Set default status to Open if not provided
      })))
    );
  }
}