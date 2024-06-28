import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren : ()=> import('./login/index/index.module').then(m=> m.IndexModule)
  },
  {
    path: 'home',
    loadChildren : ()=> import('./componentes/menu/menu.module').then(m=> m.MenuModule)
  },



  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
