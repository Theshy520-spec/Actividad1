import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Componente2 } from './componente2/componente2';
import { Componente3 } from './componente3/componente3';
import { Componente } from '../componnete';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Componente,Componente2,Componente3],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('Actividad1');
}
