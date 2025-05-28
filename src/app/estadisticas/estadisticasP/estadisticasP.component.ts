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
export class EstadisticasPComponent { }
