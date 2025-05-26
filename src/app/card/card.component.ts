import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  productos = [
    {
      nombre: 'Café Latte',
      descripcion: 'Delicioso café con leche al estilo italiano.',
      precio: 45,
      imagen: 'https://th.bing.com/th/id/OIP.kGGHvq6OK42ORhhgS6m18QHaE8?w=256&h=180&c=7&r=0&o=7&cb=iwp2&dpr=1.3&pid=1.7&rm=3',
    },
    {
      nombre: 'Té Verde',
      descripcion: 'Infusión natural antioxidante y refrescante.',
      precio: 30,
      imagen: 'https://th.bing.com/th/id/OIP.VThuzClJ8PZRRrtvScvRhgHaEK?w=302&h=180&c=7&r=0&o=7&cb=iwp2&dpr=1.3&pid=1.7&rm=3',
    },
    {
      nombre: 'Croissant',
      descripcion: 'Panecillo francés recién horneado.',
      precio: 25,
      imagen: 'https://th.bing.com/th/id/OIP.Jzr08bATRDx3MAA7ipgKlQHaE9?w=283&h=189&c=7&r=0&o=7&cb=iwp2&dpr=1.3&pid=1.7&rm=3',
    }
  ];
}
