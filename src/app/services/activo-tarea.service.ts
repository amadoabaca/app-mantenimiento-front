import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivoTarea } from '../interfaces/activo-tarea';

@Injectable({
  providedIn: 'root'
})
export class ActivoTareaService {

  private apiUrl = 'http://localhost:3000/api/activo-tarea';  // modificar ruta en el back app.js

  constructor(private http: HttpClient) {}

  // crear activo-tarea
  crearActivoTarea(activoTarea: ActivoTarea): Observable<ActivoTarea> {
    return this.http.post<ActivoTarea>(this.apiUrl, activoTarea);
  }

  // traer activo-tarea
  obtenerActivosTarea(): Observable<ActivoTarea[]> {
    return this.http.get<ActivoTarea[]>(this.apiUrl);
  }
}