import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './signin.html',
  styleUrl: './signin.css',
})
export class Signin {

  constructor(private http: HttpClient) {}

  form = new FormGroup({
  email: new FormControl('', [
    Validators.required,
    Validators.email
  ]),
  password: new FormControl('', [
    Validators.required
  ]),
   rol: new FormControl('usuario')
});

 registrar() {
  if (this.form.invalid) {
    alert('Por favor completa todos los campos');
    return;
  }

  this.http.post('http://localhost/backend/register.php', this.form.value)
     .subscribe({
    next: (res: any) => {

      console.log(res);

      if (res.success) {

        // aquí después puedes poner SweetAlert
         Swal.fire({
          icon: 'success',
          title: 'Usuario creado',
          text: 'El registro se realizó correctamente',
          confirmButtonText: 'Aceptar'
        });

        this.form.reset();

      } else {

        // alerta nativa para errores
        alert(res.message);

      }

    },

    error: err => {
      console.error(err);
      alert('Error de conexión con el servidor');
    }
  });
}
}


/*import { Component } from '@angular/core';

@Component({
  selector: 'app-signin',
  imports: [],
  templateUrl: './signin.html',
  styleUrl: './signin.css',
})
export class Signin {}*/
