import { Component, OnInit } from '@angular/core';
import { HabilidadesServiceService } from '../../service/habilidades-service.service';
import { Habilidad } from 'src/app/Model/Habilidad';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit { 

  habilidades:Habilidad[] = [];
  habilidadSelect: Habilidad = new Habilidad();
  habilidadNueva: Habilidad = new Habilidad();
  mostrarHabilidadNueva:boolean = false;
  mostrarEditarHabilidad: boolean = false;
  constructor(private habilidadesService: HabilidadesServiceService) { }

  ngOnInit() {
    this.obtenerHabilidades();
  }

  obtenerHabilidades(){
    this.habilidadesService.obtenerHabilidades().subscribe(data => {
      console.log(data);
      this.habilidades = data;
    });
  }

  mostrarNuevaHabilidad(){
    this.mostrarHabilidadNueva = true;
    this.mostrarEditarHabilidad = false;
  }

  cancelar(){
    this.mostrarHabilidadNueva = false;
    this.mostrarEditarHabilidad = false;
  }

  seleccionarHabilidad(idHabilidad: number){
    var id = this.habilidades[idHabilidad].id;
    this.habilidadesService.obtenerHabilidad(id).subscribe(data => {
      console.log(data);      
      this.habilidadSelect = data;
      this.mostrarEditarHabilidad = true;
    });
  }

  guardarHabilidad(){  
    this.habilidadesService.registrarHabilidad(this.habilidadNueva).subscribe(data => {
      this.mostrarHabilidadNueva = false;
      this.obtenerHabilidades();
    });
  }

  editarHabilidad(){
    this.habilidadesService.editarHabilidad(this.habilidadSelect).subscribe(data => {
      this.mostrarEditarHabilidad = false;   
      this.obtenerHabilidades();  
    });
  }

  eliminar(idHabilidad: number){
    var id = this.habilidades[idHabilidad].id;
    this.habilidadesService.eliminarHabilidad(id).subscribe(data => {
      this.obtenerHabilidades();
    })
  }

}
