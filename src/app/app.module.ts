import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

//servicios
import { SpotifyService } from './servicios/spotify.service';

//archivo de rutas
import { ROUTES } from './app.router';

//pipes
import { NoImagesPipe } from './pipes/no-images.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';

//componentes
import { AppComponent } from './app.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { SearchComponent } from './components/search/search.component';
import { CardsComponent } from './components/shared/cards/cards.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtistaComponent,
    SearchComponent,
    HomeComponent,
    LoadingComponent,
    NavbarComponent,
    NoImagesPipe,
    CardsComponent,
    DomseguroPipe,
  ],
  imports: [
    //todos los modules se declaran aqui
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, { useHash: true }),
  ],
  providers: [SpotifyService], //de donde extraemos los datos
  bootstrap: [AppComponent],
})
export class AppModule {}
