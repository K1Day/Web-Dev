import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [CommonModule, RouterModule], 
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent { 
  categories = [ 
    { id: 1, name: 'Гаджеты' }, 
    { id: 2, name: 'Компьютеры' }, 
    { id: 3, name: 'Красота' }, 
    { id: 4, name: 'Уход' } 
  ];

  constructor(private router: Router) {}

  goToCategory(category: { id: number; name: string }) {
    this.router.navigate(['/category', category.id]); 
  }
}

