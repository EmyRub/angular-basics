import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  // Valor por defecto que aparecerá en value de personajes
  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1000
  }

}
