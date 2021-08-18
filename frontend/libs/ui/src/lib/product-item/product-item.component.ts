import { Component, Input, OnInit } from '@angular/core';
import { Product } from '@bluebits/products';
import { CartItem, CartService } from '@bluebits/orders';
import { Router } from '@angular/router';

@Component({
  selector: 'products-item',
  templateUrl: './product-item.component.html',
  styles: [],
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {}

  addProductToCart() {
    const token = localStorage.getItem('jwtToken');
    if (!token) {
      return this.router.navigate(['/login']);
    }
    const cartItem: CartItem = {
      productId: this.product.id,
      quantity: 1,
    };
    this.cartService.setCartItem(cartItem);
  }
}
