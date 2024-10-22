import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UbicacionActivo } from '../interfaces/ubicacion';

@Injectable({
  providedIn: 'root'
})
export class UbicacionService {

  private apiUrl = 'http://localhost:3000/api/ubicacion'; 

  constructor(private http: HttpClient) {}

  // crear ubicacion
  crearUbicacion(ubicacion: UbicacionActivo): Observable<UbicacionActivo> {
    return this.http.post<UbicacionActivo>(this.apiUrl,ubicacion);
  }

  // traer ubicacion
  obtenerUbicaciones(): Observable<UbicacionActivo[]> {
    return this.http.get<UbicacionActivo[]>(this.apiUrl);
  }
}
