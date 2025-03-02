import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private products: Product[] = [];

  constructor() {
    this.loadProducts();
  }

  private loadProducts(): void {
    if (this.products.length !== 0) {
      return;
    } 
    this.products = [
      {
        id: 1,
        name: 'Fully automatic rice cooker',
        description:
          'Fully automatic rice cooker without stirring or pouring.\nPerfectly prepared risotto\nCook quinoa, congee and grain porridge.6 programs including steaming and simmering',
        category: 'Electronic',
        img: 'img/RiceCooker.jpg',
        price: 63,
        rating: 4.6,
        availability: true,
      },
      {
        id: 2,
        name: 'SAKUTO (作東) Japanese Damascus Steel Kitchen Knife Set',
        description: "A chef's first real set of knives is a big deal. Make it a Mizuchi Pro Chef Set--the finest blades available at Sakuto Knives. A significant investment, this set will serve your kitchen needs perfectly for years.",
        category:'Kitchen tools',
          
        img: 'img/KnifeSet.webp',
        price: 450,
        rating: 5,
        availability: true
      },
      {
        id: 3,
        name: 'Zion Hardwood Cutting Board',
        description:
          'This cutting board highlights our signature line of black walnut wood, combined with bright and sturdy maple and cherry.  \nThis design will add warmth and luxury to your kitchen.',
        category: 'Kitchen tools',
        img: 'img/cuttingBoard.webp',
        price: 15,
        rating: 4.7,
        availability: true,
      },
      {
        id: 4,
        name: 'Rustic Pine Bread Box',
        description:
          "Yes, it does look rustic with its galvanized finish and embossed details, but it's new and now for the kitchen. Remarkably roomy, it could even serve as a mail and magazine organizer or a repository for kid's craft materials.",
        category: 'Kitchen tools',
        img: 'img/breadBox.webp',
        price: 150,
        rating: 4.7,
        availability: true,
      },
      {
        id: 5,
        name: 'Fashion Luxury  Dinnerware',
        description:
          ' Sets Complete Dinner Sets European Style. Porcelain Combination Ceramics Plates and Bowls Microwave Safe Great Gift for Wedding Housewarming and Festival 30pc',
        category: 'Home',
        img: 'img/TableWare.jpg',
        price: 1500,
        rating: 4.9,
        availability: false
      },
      {
        id: 6,
        name: 'The Royal Moka Pot',
        description:
          'The Royal Moka Pot is a stove-top coffee maker that brews coffee by passing boiling water pressurized by steam through ground coffee.',
        category: 'Kitchen tools',
        img: 'img/mokaPot.webp',
        price: 30,
        rating: 4.5,
        availability: true
      },
    ];
  }

  getProducts(): Product[] {
    return this.products;
  }
  
  getProduct(productId: number): Product | undefined {
    return this.products.find((p) => p.id === productId);
  }
}
