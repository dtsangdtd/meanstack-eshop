import { take, takeUntil } from 'rxjs/operators';
import { ProductsService } from '@bluebits/products';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'orders-order-summary',
  templateUrl: './order-summary.component.html',
  styles: [],
})
export class OrderSummaryComponent implements OnInit, OnDestroy {
  endSubs$: Subject<any> = new Subject();
  totalPrice: number;
  isCheckout = false;
  constructor(
    private cartService: CartService,
    private productService: ProductsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this._getOrderSummary();
    this.router.url.includes('checkout')
      ? (this.isCheckout = true)
      : (this.isCheckout = false);
  }
  ngOnDestroy(): void {
    this.endSubs$.next();
    this.endSubs$.complete();
  }
  private _getOrderSummary() {
    this.cartService.cart$.pipe(takeUntil(this.endSubs$)).subscribe((cart) => {
      this.totalPrice = 0;
      cart.items.map((cartItem) => {
        this.productService
          .getProduct(cartItem.productId)
          .pipe(take(1))
          .subscribe((product) => {
            this.totalPrice += product.price * cartItem.quantity;
          });
      });
    });
  }
  navigateToCheckout() {
    this.router.navigate(['/checkout']);
  }
}
