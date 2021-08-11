import { MessageService } from 'primeng/api';
import { timer } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Order, OrdersService } from '@bluebits/orders';
import { Component, OnInit } from '@angular/core';
import { ORDER_STATUS } from '../order.constants';
import { Location } from '@angular/common';

@Component({
  selector: 'admin-orders-detail',
  templateUrl: './orders-detail.component.html',
  styles: [],
})
export class OrdersDetailComponent implements OnInit {
  order: Order;
  orderStatus = [];
  selectedStatus: any;
  constructor(
    private ordersService: OrdersService,
    private route: ActivatedRoute,
    private messageService: MessageService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this._mapOrderStatus();
    this._getOrder();
  }
  private _getOrder() {
    this.route.params.subscribe((params) => {
      if (params.id) {
        this.ordersService.getOrder(params.id).subscribe((orderData) => {
          this.order = orderData;
          this.selectedStatus = orderData.status;
        });
      }
    });
  }
  _mapOrderStatus() {
    this.orderStatus = Object.keys(ORDER_STATUS).map((key) => {
      return {
        id: key,
        name: ORDER_STATUS[key].lable,
      };
    });
    // console.log(this.orderStatus);
    // console.log(Object.keys(ORDER_STATUS));
    // console.log(Object.keys(ORDER_STATUS[0]));
  }

  onStatusChange(event) {
    this.ordersService
      .updateOrder(this.order.id, { status: event.value })
      .subscribe(
        (reponse) => {
          this.messageService.add({
            severity: 'success',
            summary: 'successfull',
            detail: `The Status is updated!`,
          });
          timer(500)
            .toPromise()
            .then(() => {
              this.location.back();
            });
        },
        (error) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: error,
          });
        }
      );
  }
}
