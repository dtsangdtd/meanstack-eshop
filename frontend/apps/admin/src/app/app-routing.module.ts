import { UsersFormComponent } from './pages/users/users-form/users-form.component';
import { UsersListComponent } from './pages/users/users-list/users-list.component';
import { ProductsFormComponent } from './pages/products/products-form/products-form.component';

import { CategoriesFormComponent } from './pages/categories/categories-form/categories-form.component';
import { CategoriesListComponent } from './pages/categories/categories-list/categories-list.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ShellComponent } from './shared/shell/shell.component';
import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsListComponent } from './pages/products/products-list/products-list.component';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'categories', component: CategoriesListComponent },
      { path: 'categories/form', component: CategoriesFormComponent },
      { path: 'categories/form/:id', component: CategoriesFormComponent },
      { path: 'products', component: ProductsListComponent },
      { path: 'products/form', component: ProductsFormComponent },
      { path: 'products/form/:id', component: ProductsFormComponent },
      { path: 'users', component: UsersListComponent },
      { path: 'users/form', component: UsersFormComponent },
      { path: 'users/form/:id', component: UsersFormComponent },
    ],
  },
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabled' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
