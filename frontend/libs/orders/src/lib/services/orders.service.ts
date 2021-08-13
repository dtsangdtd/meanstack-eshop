import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@evn/environment';
import { Order } from '../models/order';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  apiURLOrder = environment.apiURL + 'orders';
  constructor(private http: HttpClient) {}
  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.apiURLOrder);
  }
  createOrder(order: Order): Observable<any> {
    return this.http.post<any>(this.apiURLOrder, order);
  }
  deleteOrder(orderId: String): Observable<any> {
    return this.http.delete<Order>(`${this.apiURLOrder}/${orderId}`);
  }
  getOrder(orderId: string): Observable<Order> {
    return this.http.get<Order>(`${this.apiURLOrder}/${orderId}`);
  }
  updateOrder(
    orderId: string,
    orderStatus: { status: string }
  ): Observable<Order> {
    return this.http.put<Order>(`${this.apiURLOrder}/${orderId}`, orderStatus);
  }
  getCountOrder(): Observable<any> {
    return this.http
      .get<any>(`${this.apiURLOrder}` + '/get/count')
      .pipe(map((objectValues: any) => objectValues.orderCount));
  }
  getTotalSales(): Observable<any> {
    return this.http
      .get<any>(`${this.apiURLOrder}` + '/get/totalsales')
      .pipe(map((objectValues: any) => objectValues.totalSales));
  }
}
