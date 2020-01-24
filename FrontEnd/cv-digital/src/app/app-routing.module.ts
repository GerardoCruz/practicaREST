import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
 
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';

const CVRoutes: Routes = [   
  {
    path: 'experiencias',
    component: ExperienciaComponent
  },
  {
    path: 'habilidades',
    component: HabilidadesComponent
  }
];
export const appRouting: ModuleWithProviders = RouterModule.forRoot(CVRoutes, { useHash: true });
