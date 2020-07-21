import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/servicios/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent {
  artistas: any[] = [];
  loading: boolean;
  constructor(private spo: SpotifyService) {}

  buscar(palabra: string) {
    this.loading = true;
    this.spo.busquedaArtistas(palabra).subscribe((data) => {
      //this.artistas = data.artists.items; esto no hace falta cuando uso el map
      this.artistas = data;
      this.loading = false;
    });
  }
}
