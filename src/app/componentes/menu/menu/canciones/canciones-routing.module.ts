import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CancionesComponent } from './canciones/canciones.component';

const routes: Routes = [
  {
    path: '',
    component : CancionesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CancionesRoutingModule { }
