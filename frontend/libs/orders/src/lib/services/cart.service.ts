import { Cart, CartItem } from './../models/cart';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart$: BehaviorSubject<Cart> = new BehaviorSubject(this.getCart());
  constructor() {}
  initCartLocalStorage() {
    const cart: Cart = this.getCart();
    if (!cart) {
      const initCart = {
        items: [],
      };
      localStorage.setItem('cart', JSON.stringify(initCart));
    }
  }

  getCart(): Cart {
    const cartJsonString: string = localStorage.getItem('cart');
    const cart: Cart = JSON.parse(cartJsonString);
    return cart;
  }
  emptyCart() {
    const initCart = {
      items: [],
    };
    localStorage.setItem('cart', JSON.stringify(initCart));
  }
  setCartItem(cartItem: CartItem, updateCartItem?: boolean): Cart {
    let cart = this.getCart();
    const cartItemExist = cart.items.find(
      (items) => items.productId == cartItem.productId
    );
    if (cartItemExist) {
      cart.items.map((items) => {
        if (items.productId === cartItem.productId) {
          if (updateCartItem) {
            items.quantity = cartItem.quantity;
          } else {
            items.quantity = items.quantity + cartItem.quantity;
          }
          return items;
        }
      });
    } else {
      cart.items.push(cartItem);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    this.cart$.next(cart);
    return cart;
  }
  // setCartItem(CartItem: CartItem): Cart {
  //   let cart = this.getCart();

  //   let CartExist = cart.items.find(
  //     (items) => items.productId === CartItem.productId
  //   );
  //   if (CartExist) {
  //     cart.items.map((items) => {
  //       if (items.productId === CartItem.productId) {
  //         items.quantity = items.quantity + CartItem.quantity;
  //         return items;
  //       }
  //     });
  //   } else {
  //     cart.items.push(CartItem);
  //   }
  //   localStorage.setItem('cart', JSON.stringify(cart));
  //   return cart;
  // }

  deleteCartItem(productId: string) {
    const cart = this.getCart();

    const newCart = cart.items.filter((item) => item.productId !== productId);
    cart.items = newCart;
    localStorage.setItem('cart', JSON.stringify(cart));
    this.cart$.next(cart);
  }
}
