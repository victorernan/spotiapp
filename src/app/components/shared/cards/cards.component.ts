import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
})
export class CardsComponent {
  @Input() nuevasCanciones: any[] = [];

  constructor(private router: Router) {}

  //esto es importante. cada artista tiene un id, pero en este componente no solo vemos
  //artistas, sino tambnm albunes, y los id de uno y del otro no estan en el mismo sitio
  //por eso, a través de esta funcion, puedo indicar de donde hay q sacar el id

  verArtista(item: any) {
    let artistaId;
    if (item.type === 'artist') {
      artistaId = item.id;
    } else {
      artistaId = item.artists[0].id;
    }

    this.router.navigate(['/artista', artistaId]);
    //hay q definir una ruta con parametro en el router
    //este parametro va a ser necesario en el componente artista. como se envia?
    /*
    la linea 25 va a abrir un nuevo enlace, que lleva una id, esa id se necesitara
    para mostrar informacion del artista que haya pinchado el usuario
    */
  }
}
