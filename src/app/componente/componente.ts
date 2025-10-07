import { Component, OnInit } from '@angular/core';
import { Servicio } from '../servicio';      
@Component({
selector: 'app-saludo',
templateUrl: './saludo.component.html',
styleUrls: ['./saludo.component.css']
})
export class SaludoComponent {
nombre: string = 'Carmelo';
hora: Date = new Date();
getMensaje(): string {
return `Hola ${this.nombre}, son las ${this.hora.toLocaleTimeString()}`;
}
}
export class Componente implements OnInit   {
constructor(private servicio: Servicio) { }
saludo: string = "";
ngOnInit(): void {
    this.saludo = this.servicio.getSaludo();
}
}
