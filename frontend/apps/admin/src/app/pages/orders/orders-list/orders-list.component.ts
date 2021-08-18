import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { OrdersService } from '@bluebits/orders';
import { Order ,ORDER_STATUS} from '@bluebits/orders';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'bluebits-orders-list',
  templateUrl: './orders-list.component.html',
  styles: [],
})
export class OrdersListComponent implements OnInit {
  orders: Order[] = [];
  orderStatus = ORDER_STATUS;
  constructor(
    private ordersService: OrdersService,
    private router: Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this._getOrders();
  }
  deleteOrder(id: string) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.ordersService.deleteOrder(id).subscribe((reponse) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Successfull',
            detail: reponse.messages,
          });
          this._getOrders();
        });
      },
      reject: (type) => {
        switch (type) {
        }
      },
    });
  }
  showOrder(orderId: string) {
    this.router.navigateByUrl(`orders/${orderId}`);
  }
  private _getOrders() {
    this.ordersService.getOrders().subscribe((ordersData) => {
      // console.log(ordersData);
      this.orders = ordersData;
    });
  }
}
