import { Component } from '@angular/core';
import { dbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {
  
  constructor(private dbzService: dbzService) { }

  //@Input() personajes: Personaje[] = [];
  
  //Hace referencia al getter de servicio
  get personajes() {
    return this.dbzService.personajes;
  }

}