import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsSearchComponent } from './products/products-search/products-search.component';

@NgModule({
    imports: [CommonModule],
    declarations: [ProductsSearchComponent],
    exports: [ProductsSearchComponent]
})
export class ProductsModule {}
