import { LocalstorageService } from '@bluebits/users';
import { OrdersService } from './../../services/orders.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '@bluebits/users';
import { Order } from '../../models/order';
import { CartService } from '../../services/cart.service';
import { Cart } from '../../models/cart';
@Component({
  selector: 'orders-checkout-page',
  templateUrl: './checkout-page.component.html',
  styles: [],
})
export class CheckoutPageComponent implements OnInit {
  checkoutFormGroup: FormGroup;
  isSubmitted = false;
  orderItems: any[] = [];
  userId: string;
  countries = [];
  cartCount = 0;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private userService: UsersService,
    private cartService: CartService,
    private orderService: OrdersService,
    private localstorageService: LocalstorageService
  ) {}

  ngOnInit(): void {
    this._initForm();
    this._getCartItems();
    this._getContries();
    this.getUserId();
  }
  private _initForm() {
    this.checkoutFormGroup = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      street: ['', Validators.required],
      apartment: ['', Validators.required],
      zip: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
    });
  }
  placeOrder() {
    this.isSubmitted = true;
    if (this.checkoutFormGroup.invalid) {
      return;
    }
    const order: Order = {
      orderItems: this.orderItems,
      shippingAddress1: this.checkoutForm.street.value,
      shippingAddress2: this.checkoutForm.apartment.value,
      city: this.checkoutForm.city.value,
      zip: this.checkoutForm.zip.value,
      country: this.checkoutForm.country.value,
      phone: this.checkoutForm.phone.value,
      status: 0,
      user: this.userId,
      dateOrdered: `${Date.now()}`,
    };

    this.orderService.createOrder(order).subscribe(() => {
      this.cartService.emptyCart();
      this.cartService.cart$.next(this.cartService.getCart());
      this.router.navigate(['/thankyou']);
    });
  }
  private _getContries() {
    this.countries = this.userService.getCountries();
  }

  get checkoutForm() {
    return this.checkoutFormGroup.controls;
  }
  getUserId() {
    const token = this.localstorageService.getToken();
    let tokenDecode = JSON.parse(atob(token.split('.')[1]));
    this.userId = tokenDecode.userId;
  }
  private _getCartItems() {
    const cart: Cart = this.cartService.getCart();
    this.orderItems = cart.items.map((item) => {
      return {
        product: item.productId,
        quantity: item.quantity,
      };
    });
    console.log(this.orderItems);
  }

  backToCart() {
    this.router.navigate(['/cart']);
  }
}
