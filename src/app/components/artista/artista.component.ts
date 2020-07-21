import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//para saber cual es la ruta activa
import { SpotifyService } from '../../servicios/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
})
export class ArtistaComponent {
  artista: any = {};
  topTracks: any[] = [];
  artistaReproducir: any = {};
  loadingArtist: boolean;

  constructor(private router: ActivatedRoute, private spot: SpotifyService) {
    this.loadingArtist = true;
    this.router.params.subscribe((params) => {
      this.getArtista(params['id']);
      this.getTracks(params['id']);
    });
  }

  getArtista(id: string) {
    this.loadingArtist = true;
    this.spot.getArtista(id).subscribe((artista) => {
      //console.log(artista);
      this.artista = artista;
      this.loadingArtist = false;
    });
  }

  getListaRep(id: string) {
    this.spot.getArtista(id).subscribe((artista) => {
      this.artistaReproducir = artista;
      //console.log(this.artistaReproducir);
    });
  }

  getTracks(id: string) {
    this.spot.getTracks(id).subscribe((topTracks) => {
      this.topTracks = topTracks;
      //console.log(topTracks);
    });
  }
}
