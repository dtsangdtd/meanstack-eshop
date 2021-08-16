import { CartItem } from '@bluebits/orders';
import { takeUntil } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product, ProductsService } from '@bluebits/products';
import { Subject } from 'rxjs';
import { CartService } from '@bluebits/orders';

@Component({
  selector: 'products-page',
  templateUrl: './product-page.component.html',
  styles: [],
})
export class ProductPageComponent implements OnInit, OnDestroy {
  product: Product;
  endSub$: Subject<any> = new Subject();
  quantity: number = 1;
  images: string[] = [];
  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this._getProduct();
  }
  ngOnDestroy(): void {
    this.endSub$.next();
    this.endSub$.complete();
  }

  onAddToCart() {
    const cartItem: CartItem = {
      productId: this.product.id,
      quantity: this.quantity,
    };
    this.cartService.setCartItem(cartItem);
  }

  private _getProduct() {
    this.route.params.subscribe((params) => {
      let productId = params.productId;
      if (productId) {
        this.productService
          .getProduct(productId)
          .pipe(takeUntil(this.endSub$))
          .subscribe((product) => {
            this.product = product;
            this.images = product.images;
          });
      }
    });
  }
}
