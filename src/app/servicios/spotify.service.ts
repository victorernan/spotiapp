import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';
//los map solo trabajan con los observables

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(protected http: HttpClient) {
    console.log('Service Spotify esta listo');
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    //hay servicios que nos piden un token o autenticacion, para eso, esto:
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQAgL6bevcONU7JmsTTzI2Dvuaxk0ghyaMrXrTKHt_T1En2lyH_TiIvQQsoYR99GsfEwiErwR2pixo6N0mqR_Xp1ScyZ5-lH7ssFZEURZml35ias9tEfI1joP63AO-5YzJiON5C_bSs',
    });

    return this.http.get(url, { headers });
  }

  getCanciones() {
    return this.getQuery('browse/new-releases?limit=20').pipe(
      map((data) => data['albums'].items)
    );
  }

  busquedaArtistas(palabra: string) {
    return this.getQuery(`search?q=${palabra}&type=artist&limit=15`).pipe(
      map((data) => data['artists'].items)
    );
  }

  getArtista(id: string) {
    //return this.http.get(`https://api.spotify.com/v1/artists/${id}`);
    return this.getQuery(`artists/${id}`);
  }

  getTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=US`).pipe(
      map((data) => data['tracks'])
    );
  }
}
