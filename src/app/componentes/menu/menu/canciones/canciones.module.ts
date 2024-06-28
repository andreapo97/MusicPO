import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CancionesRoutingModule } from './canciones-routing.module';
import { CancionesComponent } from './canciones/canciones.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompartidosModule } from '../../../../core/compartidos/compartidos.module';


@NgModule({
  declarations: [
    CancionesComponent
  ],
  imports: [
    CommonModule,
    CancionesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CompartidosModule
  ]
})
export class CancionesModule { }
