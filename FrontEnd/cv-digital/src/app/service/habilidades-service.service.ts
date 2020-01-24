import { Injectable } from '@angular/core';
import { ServiceUtilService } from '../ServiceUtil/service-util.service';
import { Habilidad } from '../Model/Habilidad';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesServiceService {

  constructor(private URL: ServiceUtilService, private http: HttpClient) { }

  obtenerHabilidades(): Observable<Habilidad[]>{
    return this.http.get<Habilidad[]>(this.URL.HABILIDADES+'obtenerHabilidades');
  }

  obtenerHabilidad(idHabilidad: number): Observable<Habilidad>{
    return this.http.get<Habilidad>(this.URL.HABILIDADES+'obtenerHabilidad/' + idHabilidad);
  }

  registrarHabilidad(habilidad: Habilidad){
    return this.http.post(this.URL.HABILIDADES+'registrarHabilidad',habilidad,this.URL.getOptions());
  }

  editarHabilidad(habilidad: Habilidad){
    return this.http.put(this.URL.HABILIDADES + 'editarHabilidad', habilidad);
  }

  eliminarHabilidad(idHabilidad: number){
    return this.http.delete<Habilidad>(this.URL.HABILIDADES + 'eliminarHabilidad/' + idHabilidad);
  }
}
