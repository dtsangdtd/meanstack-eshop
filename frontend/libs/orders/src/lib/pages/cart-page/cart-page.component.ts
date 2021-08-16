import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { CartItemDetail } from './../../models/cart';
import { CartService } from '../../services/cart.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '@bluebits/products';

@Component({
  selector: 'orders-cart-page',
  templateUrl: './cart-page.component.html',
  styles: [],
})
export class CartPageComponent implements OnInit, OnDestroy {
  cartItemsDetail: CartItemDetail[] = [];
  cartCount = 0;
  endSub$: Subject<any> = new Subject();
  constructor(
    private router: Router,
    private cartService: CartService,
    private productService: ProductsService
  ) {}

  ngOnInit(): void {
    this._getCartDetails();
  }
  ngOnDestroy(): void {
    this.endSub$.next();
    this.endSub$.complete();
  }
  private _getCartDetails() {
    this.cartService.cart$
      .pipe(takeUntil(this.endSub$))
      .subscribe((resCart) => {
        this.cartItemsDetail = [];
        this.cartCount = resCart?.items.length ?? 0;
        resCart.items.forEach((cartItem) => {
          this.productService
            .getProduct(cartItem.productId)
            .subscribe((resProduct) => {
              this.cartItemsDetail.push({
                product: resProduct,
                quantity: cartItem.quantity,
              });
            });
        });
      });
  }

  backToShop() {
    this.router.navigate(['/products']);
  }
  deleteCartItem(cartItem: CartItemDetail) {
    this.cartService.deleteCartItem(cartItem.product.id);
  }
  updateCartItemQuantity(event, cartItem: CartItemDetail) {
    this.cartService.setCartItem(
      {
        productId: cartItem.product.id,
        quantity: event.value,
      },
      true
    );
  }
}
