import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './perfil.component.html',
  styles: [`
    :host {
      display: block;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PerfilComponent {

  perfil = {
    nombre: 'Ángel Pérez',
    email: 'angel.perez@example.com',
    rol: 'Administrador',
    fechaRegistro: new Date('2023-05-18')
  };

  editarPerfil(): void {
    console.log('Función de edición invocada');
    alert('Redirigiendo al formulario de edición...');
  }

}
