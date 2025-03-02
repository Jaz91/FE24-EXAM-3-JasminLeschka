import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { CartItem } from '../product.model';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  total: number = 0;
  discountedTotal: number = 0;
  serviceCharge: number = 0;
  discount: number = 0;

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart(): void {
    this.cartItems = this.cartService.getCartItems();
    this.updateTotal();
  }

  removeItem(productId: number): void {
    this.cartService.removeFromCart(productId);
    this.loadCart();
  }

  updateTotal(): void {
    [this.serviceCharge, this.total, this.discountedTotal] = this.cartService.getCartTotal();
    this.discount = Math.round((this.total - this.discountedTotal) * 100) / 100;
  }

  incrementQuantity(productId: number): void {
    this.cartService.incrementQuantity(productId);
    this.loadCart();
  }

  decrementQuantity(productId: number): void {
    this.cartService.decrementQuantity(productId);
    this.loadCart();
  }
}
