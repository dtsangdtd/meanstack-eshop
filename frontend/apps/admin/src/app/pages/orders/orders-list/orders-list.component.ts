import { OrdersService } from '@bluebits/orders';
import { Order } from '@bluebits/orders';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bluebits-orders-list',
  templateUrl: './orders-list.component.html',
  styles: [],
})
export class OrdersListComponent implements OnInit {
  orders: Order[] = [];
  constructor(private ordersService: OrdersService) {}

  ngOnInit(): void {
    this._getOrders();
  }
  private _getOrders() {
    this.ordersService.getOrders().subscribe((ordersData) => {
      console.log(ordersData);

      this.orders = ordersData;
    });
  }
}
