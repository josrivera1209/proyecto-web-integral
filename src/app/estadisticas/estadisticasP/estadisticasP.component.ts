import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-estadisticas-p',
  standalone: true,
  imports: [],
  templateUrl: './estadisticasP.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EstadisticasPComponent {
  productosMasVendidos = [
    { nombre: 'Café Latte', ventas: 120 },
    { nombre: 'Capuchino', ventas: 95 },
    { nombre: 'Espresso', ventas: 80 }
  ];

  productosMenosVendidos = [
    { nombre: 'Té Verde', ventas: 8 },
    { nombre: 'Chocolate Caliente', ventas: 12 },
    { nombre: 'Agua Mineral', ventas: 5 }
  ];

  productosRecomendados = [
    { nombre: 'Capuchino', rating: 4.8 },
    { nombre: 'Flat White', rating: 4.7 },
    { nombre: 'Latte Vainilla', rating: 4.6 }
  ];
}
