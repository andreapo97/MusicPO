import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListasReproduccionRoutingModule } from './listas-reproduccion-routing.module';
import { ListasReproduccionComponent } from './listas-reproduccion/listas-reproduccion.component';
import { CompartidosModule } from '../../../../core/compartidos/compartidos.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListasReproduccionComponent
  ],
  imports: [
    CommonModule,
    ListasReproduccionRoutingModule,
    CompartidosModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ListasReproduccionModule { }
