import { Routes } from '@angular/router';
import { PokemonDetailComponent } from './containers/pokemon-detail/pokemon-detail.component';
import { HomeComponent } from './containers/home/home.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'pokemon-detail/:name', component: PokemonDetailComponent },
    { path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    { path: '**', component: HomeComponent }
];
