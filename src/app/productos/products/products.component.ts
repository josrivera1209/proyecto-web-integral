import { ChangeDetectionStrategy, Component } from '@angular/core';


interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  reviews: number;
  category: string;
  image: string;
  inStock: boolean;
  features?: string[];
  specifications?: Record<string, string>;
}
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent {
  
 }

