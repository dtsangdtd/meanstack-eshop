import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductsModule } from '@bluebits/products';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { UiModule } from '@bluebits/ui';
import { NavComponent } from './shared/nav/nav.component';
import { PrimengModule } from './primeng/primeng.module';
import { ProductsDetailPagesComponent } from './pages/products-details/products-detail-pages/products-detail-pages.component';
import { ProductPageComponent } from './pages/products-details/product-page/product-page.component';
import { OrdersModule } from '@bluebits/orders';
import { MessageService } from 'primeng/api';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  {
    path: 'products',
    component: ProductListComponent,
  },
  { path: 'category/:categoryid', component: ProductListComponent },
  { path: 'products/:productId', component: ProductPageComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProductListComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ProductsDetailPagesComponent,
    ProductPageComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    UiModule,
    ProductsModule,
    BrowserAnimationsModule,
    PrimengModule,
    OrdersModule,
  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
