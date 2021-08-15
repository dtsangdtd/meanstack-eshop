import { Route, Router, ActivatedRoute, ParamMap } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import {
  Category,
  ProductsService,
  CategoriesService,
} from '@bluebits/products';
import { Product } from '@bluebits/products';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'bluebits-product-list',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  categories: Category[] = [];
  endSub$: Subject<any> = new Subject();
  isCategoryPage: boolean = false;
  constructor(
    private productService: ProductsService,
    private categoiesService: CategoriesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      let id = params.categoryid;

      id ? this._getProducts([id]) : this._getProducts();
      id ? (this.isCategoryPage = true) : (this.isCategoryPage = false);
    });

    this._getCategories();
  }
  ngOnDestroy(): void {
    this.endSub$.next();
    this.endSub$.complete();
  }

  categoryFilter() {
    const selectedCategories = this.categories
      .filter((category) => category.checked)
      .map((category) => category.id);
    this._getProducts(selectedCategories);
  }
  private _getProducts(categoryFilter?: string[]) {
    this.productService
      .getProducts(categoryFilter)
      .pipe(takeUntil(this.endSub$))
      .subscribe((products) => {
        this.products = products;
      });
  }
  private _getCategories() {
    this.categoiesService
      .getCategories()
      .pipe(takeUntil(this.endSub$))
      .subscribe((categories) => {
        this.categories = categories;
      });
  }
}
