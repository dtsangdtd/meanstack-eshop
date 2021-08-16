import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'orders-messages',
  templateUrl: './messages.component.html',
  styles: [],
})
export class MessagesComponent implements OnInit {
  constructor(
    private messageService: MessageService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.cartService.cart$.subscribe(() => {
      this.messageService.add({
        severity: 'success',
        summary: 'successfull',
        detail: `Cart is Updated!`,
      });
    });
  }
}
