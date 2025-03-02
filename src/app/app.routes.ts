import { RouterOutlet, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';

export const routes: Routes = [
    { path: "about", component: AboutUsComponent},
    { path: "cart", component: CartComponent},
    { path: "products", component: ProductsComponent},
    { path: "", component: HomeComponent},
    { path: 'details/:id', component: ProductDetailsComponent },
    { path: "**", redirectTo: ""}
];
