import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { VuelosService } from '../../services/vuelos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-vuelo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ],
  templateUrl: './editar-vuelo.html',
  styleUrl: './editar-vuelo.css'
})
export class EditarVuelo implements OnInit {


  id!: number;




 vuelo:any = {
  id:'',
  origen:'',
  destino:'',
  aerolinea:'',
  hora_salida:'',
  hora_llegada:''
};


  constructor(
    private route: ActivatedRoute,
    private vuelosService: VuelosService,
    private router: Router
  ) {}



  ngOnInit() {

  this.route.paramMap.subscribe(params => {

    const id = params.get('id');

    console.log("ID RUTA:", id);


    if(id){

      this.id = Number(id);

      this.cargarVuelo();

    }

  });

}

 cargarVuelo(){

  this.vuelosService.obtenerVuelos()
    .subscribe(vuelos => {

      const encontrado = vuelos.find(v =>
        Number(v.id) === this.id
      );


      if(encontrado){

        this.vuelo = {
          id: encontrado.id,
          origen: encontrado.origen,
          destino: encontrado.destino,
          aerolinea: encontrado.aerolinea,

          hora_salida:
            encontrado.hora_salida
              .replace(' ', 'T')
              .slice(0,16),

          hora_llegada:
            encontrado.hora_llegada
              .replace(' ', 'T')
              .slice(0,16)
        };


        console.log("CARGADO:", this.vuelo);

      }

    });

}
  guardar(){

  this.vuelosService.editarVuelo(
    this.id,
    this.vuelo
  )
  .subscribe(()=>{


    Swal.fire({
      title: 'Guardado',
      text: 'El vuelo se actualizó correctamente',
      icon: 'success',
      timer: 1500,
      showConfirmButton: false
    }).then(()=>{

      this.router.navigate([
        '/admin/vuelos'
      ]);

    });


  });

}

irVuelos(){

  this.router.navigate([
    '/admin/vuelos'
  ]);

}


}