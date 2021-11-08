import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonajeModel } from '../models/personaje.model';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  private url = 'https://rickandmortyapi.com/api/character';
  constructor( private http: HttpClient) { console.log("Servicio personajes Listo"); }

  obtenerPersonajes():Observable<any>{
    return this.http.get(this.url);
  }

  verPersonaje(ide:number):Observable<PersonajeModel>{
    return this.http.get<PersonajeModel>(`${this.url}/${ide}`);
  }

  obtenerPersonajesPagina(page:number):Observable<any>{
    return this.http.get(`${this.url}?page=${page}`);
  }

}
