import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { AuthService } from '../../services/auth.service';
import { LocalstorageService } from '../../services/localstorage.service';

@Component({
  selector: 'users-login',
  templateUrl: './login.component.html',
  styles: [],
})
export class LoginComponent implements OnInit {
  loginFormGroup: FormGroup;
  isSubmited = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private messageService: MessageService,
    private localstorageService: LocalstorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this._initLoginForm();
  }
  _initLoginForm() {
    this.loginFormGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }
  onSubmit() {
    this.isSubmited = true;
    if (this.loginFormGroup.invalid) {
      return;
    }
    const loginData = {
      email: this.loginForm.email.value,
      password: this.loginForm.password.value,
    };
    this.authService.login(loginData.email, loginData.password).subscribe(
      (response) => {
        console.log(response);
        this.localstorageService.setToken(response.token);
        this.router.navigate(['/']);
      },
      (error: HttpErrorResponse) => {
        if (error.status !== 400) {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Error in the server please try agian later',
          });
        } else {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: error.error,
          });
        }
      },
      () => {}
    );
  }
  get loginForm() {
    return this.loginFormGroup.controls;
  }
}
