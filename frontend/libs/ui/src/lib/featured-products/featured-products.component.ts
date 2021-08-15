import { takeUntil } from 'rxjs/operators';
import { ProductsService } from '@bluebits/products';
import { Product } from '@bluebits/products';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'featured-products',
  templateUrl: './featured-products.component.html',
  styles: [],
})
export class FeaturedProductsComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  endSub$: Subject<any> = new Subject();
  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this._getFeaturedProducts();
  }
  ngOnDestroy(): void {
    this.endSub$.next();
    this.endSub$.complete();
  }
  private _getFeaturedProducts() {
    this.productService
      .getProductFeatured(4)
      .pipe(takeUntil(this.endSub$))
      .subscribe((products) => {
        this.products = products;
      });
  }
}
