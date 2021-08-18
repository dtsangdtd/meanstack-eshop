import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { NavComponent } from '../shared/nav/nav.component';
import { ProductPageComponent } from './products-details/product-page/product-page.component';

import { PrimengModule } from './../primeng/primeng.module';
import { OrdersModule } from '@bluebits/orders';
import { ProductsModule } from '@bluebits/products';
import { UiModule } from '@bluebits/ui';
import { UsersModule } from '@bluebits/users';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    ProductListComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ProductPageComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    RouterModule,
    PrimengModule,
    OrdersModule,
    ProductsModule,
    UiModule,
    UsersModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [HomeComponent],
})
export class HomeModule {}
