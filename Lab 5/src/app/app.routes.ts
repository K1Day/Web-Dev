import { Routes } from '@angular/router';
import { PageComponent } from './page/page.component';
import { ProductsComponent } from './products/products.component';

export const routes: Routes = [
  { path: '', component: PageComponent }, 
  { path: 'category/:id', component: ProductsComponent }
];
