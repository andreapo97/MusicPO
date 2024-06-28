import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListasReproduccionComponent } from './listas-reproduccion/listas-reproduccion.component';

const routes: Routes = [{
  path : "",
  component: ListasReproduccionComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListasReproduccionRoutingModule { }
