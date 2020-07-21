import { Component } from '@angular/core';
import { SpotifyService } from '../../servicios/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  nuevasCanciones: any[] = [];
  loading: boolean;
  error = false;
  mensaje: string;

  constructor(private spo: SpotifyService) {
    this.loading = true;
    this.spo.getCanciones().subscribe(
      (data) => {
        this.nuevasCanciones = data;
        this.loading = false;
      },
      (errorService) => {
        this.loading = false;
        this.error = true;
        this.mensaje = errorService.error.error.message;
      }
    );
  }
}
