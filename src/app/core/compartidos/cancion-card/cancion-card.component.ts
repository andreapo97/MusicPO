import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cancion-card',
  templateUrl: './cancion-card.component.html',
  styleUrl: './cancion-card.component.css',
})
export class CancionCardComponent {
  @Input() informacion: any;

  constructor() {}

}
