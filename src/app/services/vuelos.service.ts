import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vuelo } from '../models/vuelo.model';


@Injectable({
  providedIn: 'root'
})
export class VuelosService {

  private apiUrl = 'http://localhost/backend/vuelos.php';


  constructor(
    private http: HttpClient
  ) {}


  obtenerVuelos(): Observable<Vuelo[]> {

    return this.http.get<Vuelo[]>(this.apiUrl);

  }


  crearVuelo(vuelo: Vuelo): Observable<any> {

    return this.http.post<any>(
      this.apiUrl,
      vuelo
    );

  }

  editarVuelo(id:number, vuelo:Vuelo){

  return this.http.put<any>(
    `${this.apiUrl}?id=${id}`,
    vuelo
  );

}

 eliminarVuelo(id:number){

  return this.http.delete(
    `http://localhost/backend/vuelos.php?id=${id}`
  );

}

}