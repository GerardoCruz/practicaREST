import { Injectable } from '@angular/core';
import { ServiceUtilService } from '../ServiceUtil/service-util.service';
import { HttpClient } from '@angular/common/http';
import { DatosGenerales } from '../Model/DatosGenerales';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralesServiceService {

  constructor(private URL: ServiceUtilService, private http: HttpClient) { }

  obtenerDatosGenerales(): Observable<DatosGenerales[]>{
    return this.http.get<DatosGenerales[]>(this.URL.GENERALES+'obtenerDatos'); 
  } 
}
