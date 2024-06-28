import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CancionCardComponent } from './cancion-card/cancion-card.component';
import { CancionBannerComponent } from './cancion-banner/cancion-banner.component';
import { ReproductorComponent } from './reproductor/reproductor.component';



@NgModule({
  declarations: [
    CancionCardComponent,
    CancionBannerComponent,
    ReproductorComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CancionCardComponent,
    CancionBannerComponent, 
    ReproductorComponent
  ]
})
export class CompartidosModule { }
