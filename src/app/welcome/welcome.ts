import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Login } from '../login/login';
import { Signin } from '../signin/signin';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [
    Login,
    Signin
  ],
  templateUrl: './welcome.html',
  styleUrl: './welcome.css',
})
export class Welcome {
  constructor(private router: Router) {}

  irHome() {
    this.router.navigate(['/home']);
  }

  salirLogin() {
    Swal.fire({
      title: '¿Cerrar sesión?',
      text: 'Se cerrará tu sesión actual.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, cerrar sesión',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem('usuario');

        Swal.fire({
          title: 'Sesión cerrada',
          text: 'Has cerrado sesión correctamente.',
          icon: 'success',
          timer: 1500,
          showConfirmButton: false
        });

        this.router.navigate(['/login']); // opcional
      }
    });
  }
}