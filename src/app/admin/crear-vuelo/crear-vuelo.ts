import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { VuelosService } from '../../services/vuelos.service';
import { Vuelo } from '../../models/vuelo.model';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-crear-vuelo',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink
  ],
  templateUrl: './crear-vuelo.html',
  styleUrl: './crear-vuelo.css'
})
export class CrearVuelo {


vuelo: Vuelo = {

  id: 0,
  origen: '',
  destino: '',
  hora_salida: '',
  hora_llegada: '',
  aerolinea: ''

};


constructor(
  private vuelosService: VuelosService,
  private router: Router
){}



crearVuelo(){

  this.vuelosService.crearVuelo(this.vuelo)
    .subscribe({

      next: () => {

        Swal.fire({
          title: 'Vuelo creado',
          text: 'El vuelo se ha creado correctamente',
          icon: 'success',
          timer: 1500,
          showConfirmButton: false
        }).then(() => {

          this.router.navigate(['/admin/vuelos']);

        });

      },

      error: (error) => {

        console.error(error);

        Swal.fire({
          title: 'Error',
          text: 'No se pudo crear el vuelo',
          icon: 'error'
        });

      }

    });

}

}