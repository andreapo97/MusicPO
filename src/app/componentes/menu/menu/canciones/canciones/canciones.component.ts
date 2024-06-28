import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

import { SpotifyService } from '../../../../../core/servicios/spotify.service';
import { debounceTime } from 'rxjs';
import { ReproductorService } from '../../../../../core/servicios/reproductor.service';

@Component({
  selector: 'app-canciones',
  templateUrl: './canciones.component.html',
  styleUrl: './canciones.component.css',
})
export class CancionesComponent {
  cancionControl = new FormControl('');

  cancionesBusqueda: any[] = [];

  @ViewChild('audioPlayer', { static: false }) audioPlayerRef: ElementRef<HTMLAudioElement> | null = null;


  constructor(private spotifySVC: SpotifyService, private reproductorSvc : ReproductorService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
   // this.filterCancion();
  }

  // filterCancion() {
  // .valueChanges
  //     .pipe(debounceTime(1000))
  //     .subscribe((cancion: any) => {
  //       if (cancion) this.BuscarCancion(cancion);
  //     });
  // }

  calcularAltoBanner() {
    const explorador = document.querySelector('.explorador');
    const cancionesCard = document.querySelector(
      '.canciones_card'
    ) as HTMLDivElement;

    if (explorador && cancionesCard) {
      const exploradorHeight = explorador.clientHeight;
      cancionesCard.style.height = `calc(${exploradorHeight - 60}px)`;
    }
  }

  BuscarCancion() {
    let cancion = this.cancionControl.value
    console.log(cancion)
    if (cancion) {
      this.spotifySVC.traerCanciones(cancion).subscribe((e) => {
        if (e) {
          console.log(e)
          if(e.tracks.items.length){

          
          this.cancionesBusqueda = e.tracks.items.map(
            (item: any, index: number) => {
              let cancionBusqueda = {
                artista: item.data.artists.items[0].profile.name,
                imagen: item.data.albumOfTrack.coverArt.sources[0].url,
                cancion: item.data.name,
                sonido: item.data.uri,
                duracion: this.formatDuration(
                  item.data.duration.totalMilliseconds
                ),
                id: item.data.id,
                index: index + 1,
              };
              return cancionBusqueda;
            }
          );
          console.log(this.cancionesBusqueda);
          this.calcularAltoBanner();
        }
      }
      });
    }
  }

  formatDuration(milliseconds: any) {
    // Convertir a segundos
    let totalSeconds = Math.floor(milliseconds / 1000);

    // Obtener minutos y segundos
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    // Formatear para que siempre tenga dos dígitos
    let formattedMinutes = String(minutes).padStart(2, '0');
    let formattedSeconds = String(seconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
  }

  elegircancion(id: any) {
    if (id) {
      this.spotifySVC.elegircancion(id).subscribe((resp: any) => {
        console.log(resp);
        let melodia = resp.tracks[0].preview_url;

        this.reproductorSvc.setUnicaCancion(melodia)

      
    

       // window.open(melodia, '_blank');
      });
    }
  }
}
