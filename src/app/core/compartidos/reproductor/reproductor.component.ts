import { Component, ElementRef, ViewChild } from '@angular/core';
import { ReproductorService } from '../../servicios/reproductor.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.component.html',
  styleUrl: './reproductor.component.css',
})
export class ReproductorComponent {
  listaReproduccion: any[] = [];
  unicaCancion: any;
  listaReproduccionSubscription: Subscription;
  unicaCancionSubscription: Subscription;

  audio: HTMLAudioElement = new Audio(); // Elemento de audio
  urlCancion: string = ''; // Aquí puedes establecer la URL de la canción que deseas reproducir

  duracionEstandar = 29.712645833333333;

  isPausado = false;
  reproduciendo = false;
  recorrido = 0;
  intervalo: any;

  constructor(private reproductorSvc: ReproductorService) {
    this.listaReproduccionSubscription =
      this.reproductorSvc.listaReproduccion$.subscribe((lista) => {
        this.listaReproduccion = lista;
      });

    this.unicaCancionSubscription = this.reproductorSvc.unicaCancion$.subscribe(
      (cancion) => {
        if (cancion) {
          console.log(cancion);
          this.unicaCancion = cancion;
          this.reproducirCancion(cancion);
        }
      }
    );
  }

  reproducirCancion(urlCancion: string): void {
    this.audio.pause(); // Detenemos la canción actual si se está reproduciendo
    clearInterval(this.intervalo); // Limpiamos el intervalo actual

    this.audio.src = urlCancion;
    this.audio.load();
    this.audio.play();
    this.calcularRecorrido();
    this.isPausado = false;
    this.recorrido = 0;
  }

  pausar() {
    if (this.isPausado == true) {
      this.audio.play();
      this.isPausado = false;
      this.calcularRecorrido();
      return;
    } else {
      this.isPausado = true;
      this.audio.pause();
    }
  }
  calcularRecorrido() {
    this.intervalo = setInterval(() => {
      if (this.recorrido < this.duracionEstandar && !this.isPausado) {
        this.recorrido++;
        console.log(this.recorrido);
      } else {
        clearInterval(this.intervalo); // Detenemos el intervalo
        this.isPausado = true; // Marcamos como pausado al finalizar la canción
      }
    }, 1000); // Intervalo de 1000 milisegundos (1 segundo)
  }

  getBarraBackground() {
    const percent = (this.recorrido * 100) / this.duracionEstandar; // Calcula el porcentaje de avance   
    return `linear-gradient(to right, #1ed760 ${percent / 2}%, white ${0}%)`;
  }

  // pause(): void {
  //   debugger
  //   if (this.audio.paused) {
  //     console.warn('El audio ya está pausado');
  //   } else {
  //     this.audio.pause();
  //   }
  // }
}
