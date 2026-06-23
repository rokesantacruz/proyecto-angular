import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  form = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required
    ])
  });


  login() {

    if (this.form.invalid) {
      alert('Completa todos los campos');
      return;
    }


    this.http.post(
      'http://localhost/backend/login.php',
      this.form.value
    )
    .subscribe({

      next: (res: any) => {

        console.log(res);


        if (res.success) {

          // guardar usuario logueado
          localStorage.setItem(
            'usuario',
            JSON.stringify(res.user)
          );


          // comprobar rol
          if (res.user.rol === 'admin') {

            this.router.navigate(['/admin']);

          } else {

            this.router.navigate(['/usuario']);

          }


        } else {

          alert(res.message);

        }

      },


      error: (err: any) => {

        console.error(err);
        alert('Error conectando con el servidor');

      }

    });

  }

}