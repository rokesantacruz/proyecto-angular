import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
  imports: [
    RouterOutlet,
    RouterLink
  ]
})
export class Dashboard {

  totalUsuarios = 15;
  totalVuelos = 8;
  totalReservas = 32;

  constructor(
    private router: Router
  ) {}

  salirLogin() {

  Swal.fire({
    title: '¿Cerrar sesión?',
    text: 'Se cerrará tu sesión actual',
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'Sí, salir',
    cancelButtonText: 'Cancelar'
  }).then((result) => {

    if (result.isConfirmed) {

      localStorage.removeItem('token');
      localStorage.removeItem('usuario');
      localStorage.removeItem('rol');

      Swal.fire({
        title: 'Sesión cerrada',
        icon: 'success',
        timer: 1200,
        showConfirmButton: false
      }).then(() => {

        this.router.navigate(['/']);

      });

    }

  });

}

}