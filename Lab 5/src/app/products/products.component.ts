import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from '../product-list/product-list.component';
import { ProductItemComponent } from "../product-item/product-item.component";
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterModule, ProductListComponent],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  selectedCategory: string = 'all';
  categories = ['Все','Гаджеты', 'Компьютеры', 'Красота', 'Уход']; 
  products:any[] = [
    {
      image: '/assets/images/laptop.jpg',
      name: 'Ноутбук Acer Aspire 3 15.6',
      description: 'Мощный ноутбук для работы и учебы.',
      likes: 0, 
      id: 2,
      rating: 5,
      category:'Компьютеры',
      link: 'https://kaspi.kz/shop/p/acer-aspire-3-15-6-8-gb-ssd-256-gb-win-11-a315-35-nx-a9aex-00h-114792265/?c=750000000'
    },
    {
      image: '/assets/images/mouse.jpg',
      name: 'Мышь Wireless Mouse черный',
      description: 'Точная и удобная мышь',
      likes: 0, 
      id: 2,
      rating: 4.7,
      category:'Компьютеры',
      link: 'https://kaspi.kz/shop/p/wireless-mouse-chernyi-109619826/?c=750000000',
      width:  250, height: 100
    },
    {
      image: '/assets/images/ipad.jpg',
      name: 'Планшет Apple iPad 2022 10.9 Wi-Fi 10.9 дюйм 4 Гб/64 Гб серебристый',
      description: 'iPad для учебы и развлечений.',
      likes: 0, 
      rating: 5,
      id: 1,
      category:'Гаджеты',
      link: 'https://kaspi.kz/shop/p/apple-ipad-2022-10-9-wi-fi-10-9-djuim-4-gb-64-gb-serebristyi-107264764/?c=750000000'
    },
    {
      image: '/assets/images/keyboard.jpg',
      name: 'Клавиатура Ajazz AK820 черный',
      description: 'Механическая клавиатура с подсветкой.',
      likes: 0,
      id: 2, 
      rating: 5,
      category:'Компьютеры',
      link: 'https://kaspi.kz/shop/p/ajazz-ak820-chernyi-120925482/?c=750000000',
      width:  250, height: 100
    },
    {
      image: '/assets/images/mask.jpg',
      name: 'Маска для лица Farmstay тканевая Real Peach',
      description: 'Увлажняет и питает кожу, придавая свежий вид.',
      likes: 0, 
      rating: 5,
      id: 4,
      category:'Уход',
      link: 'https://kaspi.kz/shop/p/farmstay-tkanevaja-real-peach-1-sht-100552667/?c=750000000'
    },
    {
      image: '/assets/images/cream.jpg',
      name: 'Dr. Althea крем Resveratrol 345 NA Intensive Repair для лица 50 мл',
      description: 'Интенсивно увлажняет кожу, делая её мягкой и гладкой.',
      likes: 0, 
      rating: 5,
      id: 4,
      category:'Уход',
      link: 'https://kaspi.kz/shop/p/dr-althea-krem-resveratrol-345-na-intensive-repair-dlja-litsa-50-ml-101506231/?c=750000000'
    },
    {
      image: '/assets/images/eye-liner.jpg',
      name: 'Vivienne Sabo Feutre Fin 801 подводка-фломастер черный 801',
      description: 'Долговечная и удобная в нанесении, подходит для любого макияжа.',
      likes: 0, 
      id: 3,
      rating: 5,
      category:'Красота',
      link: 'https://kaspi.kz/shop/p/vivienne-sabo-feutre-fin-801-podvodka-flomaster-chernyi-801-100796291/?c=750000000'
    },
    {
      image: '/assets/images/lipstick.jpg',
      name: 'LUXVISAGE 06 Lip Tint Aqua Gel Hyaluron Complex тинт для губ бордовый 06 toffee',
      description: 'Яркие насыщенные оттенок и стойкость на весь день.',
      likes: 0, 
      id: 3,
      rating: 5,
      category:'Красота',
      link: 'https://kaspi.kz/shop/p/luxvisage-06-lip-tint-aqua-gel-hyaluron-complex-tint-dlja-gub-bordovyi-06-toffee-110315495/?c=750000000'
    },
    {
      image: '/assets/images/charger.jpg',
      name: 'Зарядное устройство Apple 20W USB-C Power Adapter белый',
      description: 'Быстрая зарядка и защита от перегрева.',
      likes: 0, 
      rating: 5,
      id: 1,
      category:'Гаджеты',
      link: 'https://kaspi.kz/shop/p/oem-power-charger-usb-type-c-belyi-123207371/?c=750000000'
    },
    {
      image: '/assets/images/headphones.jpg',
      name: 'Наушники Apple AirPods Max серебристый',
      description: 'Отличное качество звука и длительное время работы от батареи.',
      likes: 0, 
      rating: 5,
      id: 1,
      category:'Гаджеты',
      link: 'https://kaspi.kz/shop/p/apple-airpods-max-serebristyi-100949286/?c=750000000'
    },

  ];
  
  filteredProducts: any[] = [];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const categoryId = params.get('id');

      if (categoryId) {
        const id = +categoryId;

        if (id >= 0 && id < this.categories.length) {
          this.selectedCategory = this.categories[id];

          if (this.selectedCategory === 'Все') {
            this.filteredProducts = this.products;
          } else {
            this.filteredProducts = this.products.filter(p => p.category === this.selectedCategory);
          }
        }
      }
    });
  }


  goBack() {
    this.router.navigate(['/']);
  }


  onLike(product: any) {
    product.likes += 1;
  }

  shareOnWhatsApp(link: string) {
    window.open(`https://wa.me/?text=${link}`, '_blank');
  }

  shareOnTelegram(link: string) {
    window.open(`https://t.me/share/url?url=${link}`, '_blank');
  }
}
