import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CategoriesService, ProductsService } from '@bluebits/products';
import { Location } from '@angular/common';
import { timer } from 'rxjs';

@Component({
  selector: 'admin-products-form',
  templateUrl: './products-form.component.html',
  styles: [],
})
export class ProductsFormComponent implements OnInit {
  editMode = false;
  form: FormGroup;
  isSubmited = false;
  categories = [];
  imageDisplay: string | ArrayBuffer;
  currentProductId: string;
  constructor(
    private formBuilder: FormBuilder,
    private categoriesService: CategoriesService,
    private productsService: ProductsService,
    private messageService: MessageService,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._initForm();
    this._getCategories();
    this._checkEditMode();
  }
  private _initForm() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      brand: ['', Validators.required],
      price: ['', Validators.required],
      category: ['', Validators.required],
      countInStock: ['', Validators.required],
      description: ['', Validators.required],
      richDescription: [''],
      image: ['', Validators.required],
      isFeatured: [false],
    });
  }
  onImageUpload(event) {
    const file = event.target.files[0];
    if (file) {
      this.form.patchValue({ image: file });
      this.form.get('image').updateValueAndValidity();
      const fileReader = new FileReader();
      fileReader.onload = () => {
        this.imageDisplay = fileReader.result;
      };
      fileReader.readAsDataURL(file);
    }
  }
  onSubmit() {
    this.isSubmited = true;
    if (this.form.invalid) {
      return;
    }
    const productFormData = new FormData();
    Object.keys(this.productForm).map((key) => {
      productFormData.append(key, this.productForm[key].value);
    });
    if (this.editMode) {
      this._updateProduct(productFormData);
    } else {
      this._addProduct(productFormData);
    }
  }
  onCancle() {}
  private _getCategories() {
    this.categoriesService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }
  private _addProduct(productData: FormData) {
    this.productsService.createProduct(productData).subscribe(
      (response) => {
        this.messageService.add({
          severity: 'success',
          summary: 'successfull',
          detail: `Create ${response.product.name} category successfull!`,
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
  _updateProduct(productFormData: FormData) {
    this.productsService
      .updateProduct(this.currentProductId, productFormData)
      .subscribe(
        (response) => {
          this.messageService.add({
            severity: 'success',
            summary: 'successfull',
            detail: `Create ${response.product.name} category successfull!`,
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
        this.currentProductId = params.id;
        this.productsService
          .getProduct(this.currentProductId)
          .subscribe((product) => {
            this.productForm.name.setValue(product?.name);
            this.productForm.category.setValue(product.category?.id);
            this.productForm.brand.setValue(product?.brand);
            this.productForm.price.setValue(product?.price);
            this.productForm.countInStock.setValue(product.countInStock);
            this.productForm.isFeatured.setValue(product?.isFeatured);
            this.productForm.description.setValue(product?.description);
            this.productForm.richDescription.setValue(product?.richDescription);
            this.imageDisplay = product.image;
            this.productForm.image.setValidators([]);
            this.productForm.image.updateValueAndValidity();
          });
      }
    });
  }
  get productForm() {
    return this.form.controls;
  }
}
