import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { VuelosService } from '../../services/vuelos.service';
import { Vuelo } from '../../models/vuelo.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-vuelos',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './vuelos.html',
  styleUrl: './vuelos.css'
})
export class Vuelos implements OnInit {

  vuelos: Vuelo[] = [];


  constructor(
    private vuelosService: VuelosService,
    private cd: ChangeDetectorRef,
    private router: Router
  ) {}


  ngOnInit() {
    this.cargarVuelos();
  }

  cargarVuelos() {

    this.vuelosService.obtenerVuelos()
      .subscribe({

        next: (datos) => {

          this.vuelos = datos;

          this.cd.detectChanges();

        },

        error: (error) => {

          console.error(error);

        }

      });

  }

  editar(id:number) {

  this.router.navigate([
    '/admin/editar-vuelo',
    id
  ]);

}

eliminar(id:number){

   Swal.fire({
    title: '¿Eliminar vuelo?',
    text: 'Esta acción no se puede deshacer',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí, eliminar',
    cancelButtonText: 'Cancelar'
  }).then((result) => {


    if(result.isConfirmed){


      this.vuelosService.eliminarVuelo(id)
        .subscribe(() => {


          this.cargarVuelos();


          Swal.fire({
            title: 'Eliminado',
            text: 'El vuelo se eliminó correctamente',
            icon: 'success',
            timer: 1500,
            showConfirmButton: false
          });


        });


    }


  });


}

irAlPanel() {
  this.router.navigate(['/admin']);
}
}