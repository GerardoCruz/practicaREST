import { Component, OnInit } from '@angular/core';
import { ExperienciaServiceService } from '../../service/experiencia-service.service';
import { Experiencia } from 'src/app/Model/experiencia';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  experiencias:Experiencia[] = [];
  experienciaSelect: Experiencia = new Experiencia();
  experienciaNueva: Experiencia = new Experiencia();
  mostrarExperienciaNueva:boolean = false;
  mostrarEditarExperiencia: boolean = false;
  constructor(private experienciaService: ExperienciaServiceService) { }

  ngOnInit() {
    this.obtenerExperiencias();
  }

  obtenerExperiencias(){
    this.experienciaService.obtenerExperiencias().subscribe(data => {
      console.log(data);
      this.experiencias = data;
    });
  }

  mostrarNuevaExperiencia(){
    this.mostrarExperienciaNueva = true;
    this.mostrarEditarExperiencia = false;
  }

  cancelar(){
    this.mostrarExperienciaNueva = false;
    this.mostrarEditarExperiencia = false;
  }

  seleccionarExperiencia(idExperiencia: number){
    var id = this.experiencias[idExperiencia].id;
    this.experienciaService.obtenerExperiencia(id).subscribe(data => {
      console.log(data);      
      this.experienciaSelect = data;
      this.mostrarEditarExperiencia = true;
    });
  }

  guardarExperiencia(){  
    this.experienciaService.registrarExperiencia(this.experienciaNueva).subscribe(data => {
      console.log("Guardado"); 
      this.mostrarExperienciaNueva = false;
      this.obtenerExperiencias();
    });
  }

  editarExperiencia(){
    this.experienciaService.editarExperiencia(this.experienciaSelect).subscribe(data => {
      console.log("Editado");
      this.mostrarEditarExperiencia = false;   
      this.obtenerExperiencias();  
    });
  }

  eliminar(idExperiencia: number){
    var id = this.experiencias[idExperiencia].id;
    this.experienciaService.eliminarExperiencia(id).subscribe(data => {
      console.log("Eliminado");
      this.obtenerExperiencias();
    })
  }

}
