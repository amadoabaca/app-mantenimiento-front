import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Edificio } from '../interfaces/edificio';

@Injectable({
  providedIn: 'root'
})
export class EdificioService {
  private apiUrl = 'http://localhost:3000/api/edificio'; 
  
  constructor(private http: HttpClient) {}

  // crear edificio
  crearEdificio(edificio: Edificio): Observable<Edificio> {
    return this.http.post<Edificio>(this.apiUrl, edificio);
  }

  // traer edificio
  obtenerEdificios(): Observable<Edificio[]> {
    return this.http.get<Edificio[]>(this.apiUrl);
  }
}