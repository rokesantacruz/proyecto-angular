import { Component } from '@angular/core';

@Component({
  selector: 'app-vuelos',
  standalone: true,
  templateUrl: './vuelos.component.html'
})
export class VuelosComponent {

  vuelos = [
    {
      id: 1,
      origen: 'Madrid',
      destino: 'París',
      fecha: '2026-08-12',
      precio: 120
    },
    {
      id: 2,
      origen: 'Madrid',
      destino: 'Roma',
      fecha: '2026-09-15',
      precio: 150
    }
  ];

  reservarVuelo(id: number) {
    console.log('Reservado vuelo', id);
  }
}