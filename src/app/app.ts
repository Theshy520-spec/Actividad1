import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PresentacionComponent } from '../presentacion/presentacion.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PresentacionComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Actividad1');
}
