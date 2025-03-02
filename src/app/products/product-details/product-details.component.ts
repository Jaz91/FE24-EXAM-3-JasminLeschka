import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductsService } from '../../products.service';
import { Product } from '../../product.model';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-product-details',
  imports: [RouterLink],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit{
  product: Product | undefined;

  constructor(private route: ActivatedRoute,
    private productService: ProductsService,
    private cartService: CartService) {}

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    alert(`${product.name} added to cart!`);
  }

  ngOnInit(): void {
    const productId = Number(this.route.snapshot.params['id' ]);
    this.product = this.productService.getProduct(productId);
  }
}
