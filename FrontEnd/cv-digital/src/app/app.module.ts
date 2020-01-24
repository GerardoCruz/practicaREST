import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { appRouting } from './app-routing.module';

import { AppComponent } from './app.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { ExperienciaServiceService } from './service/experiencia-service.service';
import { GeneralesServiceService } from './service/generales-service.service';
import { HabilidadesServiceService } from './service/habilidades-service.service';
import { ServiceUtilService } from './ServiceUtil/service-util.service';

@NgModule({
  declarations: [
    AppComponent,
    ExperienciaComponent,
    HabilidadesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    appRouting,
    HttpClientModule,
  ],
  providers: [
    ServiceUtilService,
    ExperienciaServiceService,
    GeneralesServiceService,
    HabilidadesServiceService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
