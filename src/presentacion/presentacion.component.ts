import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-presentacion',
  imports: [NgOptimizedImage],
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.componente.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PresentacionComponent {
}