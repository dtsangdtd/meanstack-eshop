import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { PrimengModule } from './../../../../apps/admin/src/app/primeng/primeng.module';

export const usersRoutes: Route[] = [
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(usersRoutes),
    PrimengModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [LoginComponent],
})
export class UsersModule {}
