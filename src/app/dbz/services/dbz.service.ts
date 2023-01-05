import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class dbzService {

    /* Orden dentro de una clase: 
    Propiedades, Getters, Setters y por último el constructor y abajo vienen los métodos.
    */

    /* Se pone como private para que dentro de otros
     componentes no puedan acceder a _personajes (.)*/
    private _personajes: Personaje[] = [

        {
            nombre: 'Goku',
            poder: 15000
        },

        {
            nombre: 'Vegeta',
            poder: 7500
        }
    ];

    // (get) Obtiene la información de personajes
    // (personajes) es el nombre que se decidió ponerle
    get personajes(): Personaje[] {
        //Spread Operator (...) Impide modificar el objeto original
        return [...this._personajes];
    }

    agregarPersonaje(personaje: Personaje) {
        this._personajes.push(personaje);
    }

}