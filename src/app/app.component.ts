import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gitAngular';

  constructor(){
    console.log("nuevas funciones");
    console.warn("cuidado");
    console.log(("prueba de conflictos"));
  }
}
