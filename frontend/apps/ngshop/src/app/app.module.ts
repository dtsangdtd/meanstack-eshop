import { HomeModule } from './pages/home.module';
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
import { ProductPageComponent } from './pages/products-details/product-page/product-page.component';
import { OrdersModule } from '@bluebits/orders';
import { MessageService } from 'primeng/api';
import { UsersModule } from '@bluebits/users';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  declarations: [AppComponent, HomePageComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    UiModule,
    ProductsModule,
    BrowserAnimationsModule,
    HomeModule,
    PrimengModule,
    OrdersModule,
    UsersModule,
  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
