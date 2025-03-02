import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductsService } from '../products.service';
import { RouterLink } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-products',
  imports: [RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductsService, private cartService: CartService) {
  }

  loadProducts(): void {
    this.products = this.productService.getProducts();
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    alert(`${product.name} added to cart!`);
  }

  ngOnInit(): void {
    this.loadProducts();
  }
}

