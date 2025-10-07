import { Routes } from '@angular/router';
import { Componente } from '../componnete';
import { Componente3 } from './componente3/componente3';
import { Componente2 } from './componente2/componente2';

export const routes: Routes = [
    { path: 'componente', component: Componente },
    { path: 'componente2', component: Componente2 },
    { path: 'componente3', component: Componente3 },
    { path: '', redirectTo: '/componente', pathMatch: 'full' }
];
