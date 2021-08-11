import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@evn/environment';
import { Order } from '../models/order';
@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  apiURLCategories = environment.apiURL + 'orders';
  constructor(private http: HttpClient) {}
  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.apiURLCategories);
  }
  createOrder(order: Order): Observable<any> {
    return this.http.post<any>(this.apiURLCategories, order);
  }
  deleteOrder(orderId: String): Observable<any> {
    return this.http.delete<Order>(`${this.apiURLCategories}/${orderId}`);
  }
  getOrder(orderId: string): Observable<Order> {
    return this.http.get<Order>(`${this.apiURLCategories}/${orderId}`);
  }
  updateOrder(
    orderId: string,
    orderStatus: { status: string }
  ): Observable<Order> {
    return this.http.put<Order>(
      `${this.apiURLCategories}/${orderId}`,
      orderStatus
    );
  }
}
