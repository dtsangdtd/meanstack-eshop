import { timer } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { User, UsersService } from '@bluebits/users';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'admin-users-form',
  templateUrl: './users-form.component.html',
  styles: [],
})
export class UsersFormComponent implements OnInit {
  form: FormGroup;
  isSubmited = false;
  editMode = false;
  currentUserId: string;
  countries = [];
  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private messageService: MessageService,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._initUserForm();
    this._getCountries();
    this._checkEditMode();
  }
  private _initUserForm() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      isAdmin: [false],
      street: [''],
      apartment: [''],
      zip: [''],
      city: [''],
      country: [''],
    });
  }

  private _getCountries() {
    this.countries = this.usersService.getCountries();
  }
  private _addUser(user: User) {
    this.usersService.createUser(user).subscribe(
      (user: User) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: `User ${user.name} is created!`,
        });
        timer(2000)
          .toPromise()
          .then(() => {
            this.location.back();
          });
      },
      () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'User is not created!',
        });
      }
    );
  }
  private _updateUser(user: User) {
    this.usersService.updateUser(this.currentUserId, user).subscribe(
      () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'User is updated!',
        });
        timer(2000)
          .toPromise()
          .then(() => {
            this.location.back();
          });
      },
      () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'User is not updated!',
        });
      }
    );
  }
  private _checkEditMode() {
    this.route.params.subscribe((params) => {
      if (params.id) {
        this.editMode = true;
        this.currentUserId = params.id;
        this.usersService.getUser(params.id).subscribe((response) => {
          this.userForm.name.setValue(response.user.name);
          this.userForm.email.setValue(response.user.email);
          this.userForm.phone.setValue(response.user.phone);
          this.userForm.isAdmin.setValue(response.user.isAdmin);
          this.userForm.street.setValue(response.user.street);
          this.userForm.apartment.setValue(response.user.apartment);
          this.userForm.zip.setValue(response.user.zip);
          this.userForm.city.setValue(response.user.city);
          this.userForm.country.setValue(response.user.country);

          this.userForm.password.setValidators([]);
          this.userForm.password.updateValueAndValidity();
        });
      }
    });
  }

  onSubmit() {
    this.isSubmited = true;
    if (this.form.invalid) {
      return;
    }

    if (this.editMode) {
      const user: User = {
        id: this.currentUserId,
        name: this.userForm.name.value,
        email: this.userForm.email.value,
        phone: this.userForm.phone.value,
        isAdmin: this.userForm.isAdmin.value,
        street: this.userForm.street.value,
        apartment: this.userForm.apartment.value,
        zip: this.userForm.zip.value,
        city: this.userForm.city.value,
        country: this.userForm.country.value,
      };
      this._updateUser(user);
    } else {
      const user: User = {
        id: this.currentUserId,
        name: this.userForm.name.value,
        email: this.userForm.email.value,
        phone: this.userForm.phone.value,
        password: this.userForm.password.value,
        isAdmin: this.userForm.isAdmin.value,
        street: this.userForm.street.value,
        apartment: this.userForm.apartment.value,
        zip: this.userForm.zip.value,
        city: this.userForm.city.value,
        country: this.userForm.country.value,
      };
      this._addUser(user);
    }
  }
  onCancle() {
    this.location.back();
  }
  get userForm() {
    return this.form.controls;
  }
}
