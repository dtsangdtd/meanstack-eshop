import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ui-gallery',
  templateUrl: './ui-gallery.component.html',
  styles: [],
})
export class UiGalleryComponent implements OnInit {
  selectedImageUrl: string;

  @Input() images: string[];
  constructor() {}

  ngOnInit(): void {}
  changeSelectedImage(imageUrl: string) {
    this.selectedImageUrl = imageUrl;
  }
}
