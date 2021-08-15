import { takeUntil } from 'rxjs/operators';
import { CategoriesService, Category } from '@bluebits/products';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'categories-banner',
  templateUrl: './categories-banner.component.html',
  styles: [],
})
export class CategoriesBannerComponent implements OnInit, OnDestroy {
  categories: Category[] = [];
  endSub$: Subject<any> = new Subject();
  constructor(private categoryService: CategoriesService) {}

  ngOnInit(): void {
    this.categoryService
      .getCategories()
      .pipe(takeUntil(this.endSub$))
      .subscribe((categories) => {
        console.log(categories);
        
        this.categories = categories;
      });
  }
  ngOnDestroy() {
    this.endSub$.next();
    this.endSub$.complete();
  }
}
