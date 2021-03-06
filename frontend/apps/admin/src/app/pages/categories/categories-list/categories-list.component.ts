import { ConfirmationService, MessageService } from 'primeng/api';
import { CategoriesService, Category } from '@bluebits/products';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
@Component({
  selector: 'admin-categories-list',
  templateUrl: './categories-list.component.html',
  styles: [],
})
export class CategoriesListComponent implements OnInit, OnDestroy {
  categories: Category[] = [];
  endSub$: Subject<any> = new Subject();
  constructor(
    private categoriesService: CategoriesService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this._getCategory();
  }
  ngOnDestroy() {
    this.endSub$.complete();
  }
  deleteCategory(id: string) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to Delete category?',
      header: 'Delete Category',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.categoriesService.deleteCategory(id).subscribe(
          (response) => {
            this._getCategory();
            this.messageService.add({
              severity: 'success',
              summary: 'successfull',
              detail: 'Delete category successfull',
            });
          },
          (error) => {
            this.messageService.add({
              severity: 'error',
              summary: 'error',
              detail: error,
            });
          }
        );
      },
      reject: (type) => {
        switch (type) {
        }
      },
    });
  }

  updateCategory(categoryId: string) {
    this.router.navigateByUrl(`categories/form/${categoryId}`);
  }

  private _getCategory() {
    this.categoriesService
      .getCategories()
      .pipe(takeUntil(this.endSub$))
      .subscribe((categoriesData) => {
        this.categories = categoriesData;
      });
  }
}
