import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { ProductsService } from '@bluebits/products';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-products-list',
  templateUrl: './products-list.component.html',
  styles: [],
})
export class ProductsListComponent implements OnInit {
  products = [];
  constructor(
    private productsService: ProductsService,
    private router: Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this._getProducts();
  }
  private _getProducts() {
    this.productsService.getProducts().subscribe((response) => {
      this.products = response;
    });
  }
  deleteProduct(id: string) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.productsService.deleteProduct(id).subscribe((reponse) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Successfull',
            detail: reponse.messages,
          });
          this._getProducts();
        });
      },
      reject: (type) => {
        switch (type) {
        }
      },
    });
  }
  updateProduct(id: string) {
    this.router.navigateByUrl(`products/form/${id}`);
  }
}
