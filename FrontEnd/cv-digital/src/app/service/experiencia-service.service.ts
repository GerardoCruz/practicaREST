import { Injectable } from '@angular/core';
import { ServiceUtilService } from '../ServiceUtil/service-util.service';
import { Experiencia } from '../Model/experiencia';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaServiceService {

  constructor(private URL: ServiceUtilService, private http: HttpClient) { }

  obtenerExperiencias(): Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(this.URL.EXPERIENCIA+'obtenerExperiencias');
  }

  obtenerExperiencia(idExperiencia: number): Observable<any>{
    return this.http.get<Experiencia>(this.URL.EXPERIENCIA+'obtenerExperiencia/' + idExperiencia,this.URL.getOptions());
  }

  registrarExperiencia(experiencia: Experiencia){
    return this.http.post(this.URL.EXPERIENCIA+'registrarExperiencia',experiencia,this.URL.getOptions());
  }

  editarExperiencia(experiencia: Experiencia){
    return this.http.put(this.URL.EXPERIENCIA+'editarExperiencia',experiencia,this.URL.getOptions());
  }

  eliminarExperiencia(idExperiencia: number){
    return this.http.delete(this.URL.EXPERIENCIA + 'eliminarExperiencia/' + idExperiencia, this.URL.getOptions());
  }

}
