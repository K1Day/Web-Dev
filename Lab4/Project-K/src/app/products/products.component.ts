import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    {
      image: '/assets/images/laptop.jpg',
      name: 'Ноутбук Acer Aspire 3 15.6',
      description: 'Мощный ноутбук для работы и учебы.',
      rating: 5,
      category:'Компьютеры',
      link: 'https://kaspi.kz/shop/p/acer-aspire-3-15-6-8-gb-ssd-256-gb-win-11-a315-35-nx-a9aex-00h-114792265/?c=750000000'
    },
    {
      image: '/assets/images/mouse.jpg',
      name: 'Мышь Wireless Mouse черный',
      description: 'Точная и удобная мышь',
      rating: 4.7,
      category:'Компьютеры',
      link: 'https://kaspi.kz/shop/p/wireless-mouse-chernyi-109619826/?c=750000000',
      width:  250, height: 100
    },
    {
      image: '/assets/images/ipad.jpg',
      name: 'Планшет Apple iPad 2022 10.9 Wi-Fi 10.9 дюйм 4 Гб/64 Гб серебристый',
      description: 'iPad для учебы и развлечений.',
      rating: 5,
      category:'Гаджеты',
      link: 'https://kaspi.kz/shop/p/apple-ipad-2022-10-9-wi-fi-10-9-djuim-4-gb-64-gb-serebristyi-107264764/?c=750000000'
    },
    {
      image: '/assets/images/keyboard.jpg',
      name: 'Клавиатура Ajazz AK820 черный',
      description: 'Механическая клавиатура с подсветкой.',
      rating: 5,
      category:'Компьютеры',
      link: 'https://kaspi.kz/shop/p/ajazz-ak820-chernyi-120925482/?c=750000000'
    },
    {
      image: '/assets/images/mask.jpg',
      name: 'Маска для лица Farmstay тканевая Real Peach',
      description: 'Увлажняет и питает кожу, придавая свежий вид.',
      rating: 5,
      category:'Уход',
      link: 'https://kaspi.kz/shop/p/farmstay-tkanevaja-real-peach-1-sht-100552667/?c=750000000'
    },
    {
      image: '/assets/images/cream.jpg',
      name: 'Dr. Althea крем Resveratrol 345 NA Intensive Repair для лица 50 мл',
      description: 'Интенсивно увлажняет кожу, делая её мягкой и гладкой.',
      rating: 5,
      category:'Уход',
      link: 'https://kaspi.kz/shop/p/dr-althea-krem-resveratrol-345-na-intensive-repair-dlja-litsa-50-ml-101506231/?c=750000000'
    },
    {
      image: '/assets/images/eye-liner.jpg',
      name: 'Vivienne Sabo Feutre Fin 801 подводка-фломастер черный 801',
      description: 'Долговечная и удобная в нанесении, подходит для любого макияжа.',
      rating: 5,
      category:'Красота',
      link: 'https://kaspi.kz/shop/p/vivienne-sabo-feutre-fin-801-podvodka-flomaster-chernyi-801-100796291/?c=750000000'
    },
    {
      image: '/assets/images/lipstick.jpg',
      name: 'LUXVISAGE 06 Lip Tint Aqua Gel Hyaluron Complex тинт для губ бордовый 06 toffee',
      description: 'Яркие насыщенные оттенок и стойкость на весь день.',
      rating: 5,
      category:'Красота',
      link: 'https://kaspi.kz/shop/p/luxvisage-06-lip-tint-aqua-gel-hyaluron-complex-tint-dlja-gub-bordovyi-06-toffee-110315495/?c=750000000'
    },
    {
      image: '/assets/images/charger.jpg',
      name: 'Зарядное устройство Apple 20W USB-C Power Adapter белый',
      description: 'Быстрая зарядка и защита от перегрева.',
      rating: 5,
      category:'Гаджеты',
      link: 'https://kaspi.kz/shop/p/oem-power-charger-usb-type-c-belyi-123207371/?c=750000000'
    },
    {
      image: '/assets/images/headphones.jpg',
      name: 'Наушники Apple AirPods Max серебристый',
      description: 'Отличное качество звука и длительное время работы от батареи.',
      rating: 5,
      category:'Гаджеты',
      link: 'https://kaspi.kz/shop/p/apple-airpods-max-serebristyi-100949286/?c=750000000'
    },

  ];
 
  shareOnWhatsApp(productLink: string) {
    const url = `https://wa.me/?text=${encodeURIComponent(productLink)}`;
    window.open(url, '_blank');
  }

  shareOnTelegram(productLink: string) {
    const url = `https://t.me/share/url?url=${encodeURIComponent(productLink)}`;
    window.open(url, '_blank');
  }
}
