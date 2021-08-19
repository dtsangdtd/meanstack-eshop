import { UserOrderHistoryComponent } from './../user-order-history/user-order-history.component';
import { HomeComponent } from './home.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductPageComponent } from './products-details/product-page/product-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: HomePageComponent,
      },
      {
        path: 'products',
        component: ProductListComponent,
      },
      { path: 'category/:categoryid', component: ProductListComponent },
      { path: 'products/:productId', component: ProductPageComponent },
      {
        path: 'history/:id',
        component: UserOrderHistoryComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
