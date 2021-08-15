import { takeUntil } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product, ProductsService } from '@bluebits/products';
import { Subject } from 'rxjs';

@Component({
  selector: 'products-page',
  templateUrl: './product-page.component.html',
  styles: [],
})
export class ProductPageComponent implements OnInit, OnDestroy {
  product: Product;
  endSub$: Subject<any> = new Subject();
  quantity = 1;
  images: string[] = [];
  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._getProduct();
  }
  ngOnDestroy(): void {
    this.endSub$.next();
    this.endSub$.complete();
  }

  onAddToCart() {}

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
