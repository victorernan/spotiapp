import { Routes } from '@angular/router';
import { ArtistaComponent } from './components/artista/artista.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';

export const ROUTES: Routes = [
  { path: 'artista/:id', component: ArtistaComponent },
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
  { path: '', pathMatch: 'full', redirectTo: 'home' }, //cualquier path vacio
];

/*este paso me lo puedo ahorrar
export const ROUTES = RouterModule.forRoot(rutas);
en el mismo momento que exporto la variable le defino las rutas
*/
