import { Injectable } from '@angular/core';
import { CartItem, Product } from './product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: CartItem[] = [];

  addToCart(product: Product): void {
    const existingProduct = this.cart.find((item) => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }
  }

  incrementQuantity(productId: number): void {
    const product = this.cart.find((item) => item.id === productId);
    if (product) {
      product.quantity++;
    }
  }

  decrementQuantity(productId: number): void {
    const product = this.cart.find((item) => item.id === productId);
    if (product && product.quantity > 1) {
      product.quantity--;
    }
  }

  removeFromCart(productId: number): void {
    this.cart = this.cart.filter((item) => item.id !== productId);
  }

  getCartItems(): CartItem[] {
    return this.cart;
  }

  getCartTotal(): [serviceCharge: number, total: number, discountedTotal: number] {
    let total: number = this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
    const serviceCharge: number = total * 0.1;
    total += serviceCharge;
    let discountedTotal = total;
    if (total > 40) {
      discountedTotal = total - total * 0.15;
    }
    return [Math.round(serviceCharge * 100) / 100,
      Math.round(total * 100) / 100,
      Math.round(discountedTotal * 100) / 100];
  }
}
