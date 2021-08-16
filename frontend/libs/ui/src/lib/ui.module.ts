import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { SliderComponent } from './slider/slider.component';
import { CategoriesBannerComponent } from './categories-banner/categories-banner.component';
import { ButtonModule } from 'primeng/button';
import { FeaturedProductsComponent } from './featured-products/featured-products.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { UiGalleryComponent } from './ui-gallery/ui-gallery.component';

@NgModule({
  declarations: [
    BannerComponent,
    SliderComponent,
    CategoriesBannerComponent,
    FeaturedProductsComponent,
    ProductItemComponent,
    UiGalleryComponent,
  ],
  imports: [CommonModule, ButtonModule, RouterModule],
  exports: [
    BannerComponent,
    SliderComponent,
    CategoriesBannerComponent,
    ButtonModule,
    FeaturedProductsComponent,
    ProductItemComponent,
    UiGalleryComponent,
    
  ],
})
export class UiModule {}
