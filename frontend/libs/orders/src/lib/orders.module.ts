import { HasRoleGuard } from './../../../users/src/lib/services/has-role.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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

import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { FieldsetModule } from 'primeng/fieldset';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { DropdownModule } from 'primeng/dropdown';

export const ordersRoutes: Route[] = [
  { path: 'cart', component: CartPageComponent, canActivate: [HasRoleGuard] },
  { path: 'checkout', component: CheckoutPageComponent },
  { path: 'thankyou', component: ThankYouComponent },
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
    ReactiveFormsModule,
    DropdownModule,
    InputTextModule,
    InputMaskModule,
    FieldsetModule,
    MessagesModule,
    MessageModule,
  ],
  exports: [
    CartIconComponent,
    MessagesComponent,
    ToastModule,
    CartPageComponent,
    ButtonModule,
    InputNumberModule,
    OrderSummaryComponent,
    DropdownModule,
    InputTextModule,
    InputMaskModule,
    FieldsetModule,
    MessagesModule,
    MessageModule,
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
