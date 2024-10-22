import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrdenTrabajo } from '../interfaces/orden-trabajo';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class OrdenTrabajoService {
  private apiUrl = 'http://localhost:3000/api/orden-trabajo';
  constructor(private http: HttpClient) { }

  crearOrdenTrabajo(orden: OrdenTrabajo): Observable<OrdenTrabajo> {
    return this.http.post<OrdenTrabajo>(this.apiUrl, orden);
  }

  listaOrdenTrabajo(): Observable<OrdenTrabajo[]>{
    return this.http.get<OrdenTrabajo[]>(this.apiUrl);
  }


  getOrdenDetrabajo(id:any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  deleteOrdenTrabajo(id: any):Observable<OrdenTrabajo> {
    return this.http.delete<OrdenTrabajo>(`${this.apiUrl}/${id}`);
  }

  updateOrdenTrabajo(id: any, ot: OrdenTrabajo):Observable<OrdenTrabajo> {
    console.log("orden: ", ot);
    return this.http.patch<OrdenTrabajo>(`${this.apiUrl}/${id}`, ot);
  }

}
