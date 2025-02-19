import { Component } from '@angular/core';
import { ProductsComponent } from "./products/products.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [ProductsComponent]
})
export class AppComponent {
  title = 'Мой Angular проект';
}
