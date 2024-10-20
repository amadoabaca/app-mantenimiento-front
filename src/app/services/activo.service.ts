import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Activo } from '../interfaces/activo';

@Injectable({
  providedIn: 'root'
})
export class ActivoService {

  private apiUrl = 'http://localhost:3000/api/activo';  // modificar ruta en el back app.js

  constructor(private http: HttpClient) {}

  // crear activo
  crearActivo(activo: Activo): Observable<Activo> {
    return this.http.post<Activo>(this.apiUrl, activo);
  }

  // traer activos
  obtenerActivos(): Observable<Activo[]> {
    return this.http.get<Activo[]>(this.apiUrl);
  }
}

