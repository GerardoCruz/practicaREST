import { Component } from '@angular/core'; 
import { GeneralesServiceService } from './service/generales-service.service';
import { DatosGenerales } from './Model/DatosGenerales';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cv-digital';
  datosGenerales: DatosGenerales = new DatosGenerales();
  habilidades:boolean = false;
  experiencias:boolean = true;

  constructor(private datosGeneralesService: GeneralesServiceService){

  }

  ngOnInit() {
    this.datosGeneralesService.obtenerDatosGenerales().subscribe(data => {
      console.log(data);
      this.datosGenerales = data[0];
    });
  }

  mostrarExperiencias(){
    this.experiencias = true;
    this.habilidades = false;
  }

  mostrarHabilidades(){
    this.habilidades = true;
    this.experiencias = false;
  }
}
