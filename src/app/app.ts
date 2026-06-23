import { NgFor } from '@angular/common';
import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Login } from './login/login';
import { Signin } from './signin/signin';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, Login, Signin],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  protected readonly title = signal('angular');

  pasajeros: any[] = [];
  loading = true;

  constructor(private http: HttpClient) {}
  
  info: any;

  ngOnInit() {
    this.http.get<any[]>('http://localhost/backend/pasajeros.php')
      .subscribe(res => {
        this.info = res;
        this.pasajeros = res;
        this.loading = false;
      });
  }
}

/*import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular');
}*/
