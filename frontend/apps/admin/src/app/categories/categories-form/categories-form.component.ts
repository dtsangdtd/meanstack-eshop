import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { CategoriesService } from '@bluebits/products';
import { Category } from '@bluebits/products';
import { timer } from 'rxjs';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'admin-categories-form',
  templateUrl: './categories-form.component.html',
  styles: [],
})
export class CategoriesFormComponent implements OnInit {
  form: FormGroup;
  isSubmited = false;
  editMode = false;
  currentCategoryId: string;
  constructor(
    private formBuilder: FormBuilder,
    private categoriesService: CategoriesService,
    private messageService: MessageService,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      icon: ['', Validators.required],
      color: ['#fff'],
    });
    this._checkEditMode();
  }

  onSubmit() {
    this.isSubmited = true;
    if (this.form.invalid) {
      return;
    }
    const category: Category = {
      name: this.categoryForm.name.value,
      icon: this.categoryForm.icon.value,
      color: this.categoryForm.color.value,
    };
    if (this.editMode) {
      this._updateCategory(category);
    } else {
      this._addCategory(category);
    }
  }
  onCancle() {
    this.location.back();
  }
  get categoryForm() {
    return this.form.controls;
  }
  private _addCategory(category: Category) {
    this.categoriesService.createCategory(category).subscribe(
      (response) => {
        this.messageService.add({
          severity: 'success',
          summary: 'successfull',
          detail: `Create ${response.category.name} category successfull!`,
        });
        timer(500)
          .toPromise()
          .then(() => {
            this.location.back();
          });
      },
      (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: error,
        });
      }
    );
  }
  private _updateCategory(category: Category) {
    this.categoriesService
      .updateCategory(this.currentCategoryId, category)
      .subscribe(
        (response) => {
          this.messageService.add({
            severity: 'success',
            summary: 'successfull',
            detail: 'Update category successfull!',
          });
          timer(500)
            .toPromise()
            .then(() => {
              this.location.back();
            });
        },
        (error) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: error,
          });
        }
      );
  }

  _checkEditMode() {
    this.route.params.subscribe((params) => {
      if (params.id) {
        this.editMode = true;
        this.currentCategoryId = params.id;
        this.categoriesService
          .getCategory(this.currentCategoryId)
          .subscribe((response) => {
            this.categoryForm.name.setValue(response.name);
            this.categoryForm.icon.setValue(response.icon);
            this.categoryForm.color.setValue(response.color);
          });
      }
    });
  }
}
