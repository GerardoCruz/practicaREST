import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class ServiceUtilService {

    constructor() { } 
    URL = 'http://localhost:9898/api/sps/helloworld/v1/';
    GENERALES = this.URL + 'generales/';
    EXPERIENCIA = this.URL + 'experiencias/';
    HABILIDADES = this.URL + 'habilidades/'; 

    getOptions(){
      const httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };
      return httpOptions;
    }
   
  }