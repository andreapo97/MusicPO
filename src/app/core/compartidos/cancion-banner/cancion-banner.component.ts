import { Component, EventEmitter, Input, Output, output } from '@angular/core';

@Component({
  selector: 'app-cancion-banner',
  templateUrl: './cancion-banner.component.html',
  styleUrl: './cancion-banner.component.css',
})
export class CancionBannerComponent {
  @Input() informacion: any;
  @Output() idCancionElegida = new EventEmitter<any>();

  elejircancion(id:any) {

    this.idCancionElegida.emit(id)
  }
}
