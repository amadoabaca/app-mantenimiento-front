import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:3000/api/lista-usuarios'; 

  constructor(private http: HttpClient) { }


  // traer usuario
  obtenerOperarios(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }
  
}
