import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {
    path: '',
    component : MenuComponent,
    loadChildren : ()=> import('./menu/inicio/inicio.module').then(m=> m.InicioModule)
  },
  {
    path: 'canciones',
    component : MenuComponent,
    loadChildren : ()=> import('./menu/canciones/canciones.module').then(m=> m.CancionesModule)
  },
  {
    path: 'listas',
    component : MenuComponent,
    loadChildren : ()=> import('./menu/listas-reproduccion/listas-reproduccion.module').then(m=> m.ListasReproduccionModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
