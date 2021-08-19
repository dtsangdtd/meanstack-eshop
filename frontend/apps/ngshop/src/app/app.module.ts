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
import { RouterModule } from '@angular/router';

import { UiModule } from '@bluebits/ui';

import { PrimengModule } from './primeng/primeng.module';
import { OrdersModule } from '@bluebits/orders';
import { MessageService } from 'primeng/api';
import { UsersModule } from '@bluebits/users';
import { AppRoutingModule } from './app-routing.module';
import { UserOrderHistoryComponent } from './user-order-history/user-order-history.component';
@NgModule({
  declarations: [AppComponent, UserOrderHistoryComponent],
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
  exports: [UserOrderHistoryComponent],
})
export class AppModule {}
