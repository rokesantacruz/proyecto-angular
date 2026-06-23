import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

  misVuelos = 3;
  misReservas = 5;
  notificaciones = 2;

  constructor(private router: Router) {}

  cerrarSesion() {
    localStorage.clear();
    this.router.navigate(['/']);
  }

}