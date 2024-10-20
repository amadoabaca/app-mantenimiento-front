import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sector } from '../interfaces/sector';

@Injectable({
  providedIn: 'root'
})
export class SectorService {

  private apiUrl = 'http://localhost:3000/api/sector'; 

  constructor(private http: HttpClient) {}

  // crear sector
  crearSector(sector: Sector): Observable<Sector> {
    return this.http.post<Sector>(this.apiUrl,sector);
  }

  // traer sector
  obtenerSectores(): Observable<Sector[]> {
    return this.http.get<Sector[]>(this.apiUrl);
  }
}
