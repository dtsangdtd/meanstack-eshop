import { FormsModule } from '@angular/forms';
import { CartService } from './services/cart.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { CartIconComponent } from './components/cart-icon/cart-icon.component';
import { BadgeModule } from 'primeng/badge';
import { MessagesComponent } from './components/messages/messages.component';
import { ToastModule } from 'primeng/toast';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';
import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';
import { ThankYouComponent } from './pages/thank-you/thank-you.component';

export const ordersRoutes: Route[] = [
  { path: 'cart', component: CartPageComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ordersRoutes),
    BadgeModule,
    ToastModule,
    ButtonModule,
    InputNumberModule,
    FormsModule,
  ],
  exports: [
    CartIconComponent,
    MessagesComponent,
    ToastModule,
    CartPageComponent,
    ButtonModule,
    InputNumberModule,
    OrderSummaryComponent,
  ],
  declarations: [
    CartIconComponent,
    MessagesComponent,
    CartPageComponent,
    OrderSummaryComponent,
    CheckoutPageComponent,
    ThankYouComponent,
  ],
})
export class OrdersModule {
  constructor(cartService: CartService) {
    cartService.initCartLocalStorage();
  }
}
