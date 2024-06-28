import { Component } from '@angular/core';
import { SpotifyService } from '../../../../../core/servicios/spotify.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',
})
export class InicioComponent {
  listaRecomendados: any[] = [];

  informacionPadre = {
    imagen:
      'https://img.freepik.com/vector-premium/personajes-bailarina-pareja-lindos-aislados-bailando-al-concepto-musica-salsa-vector_112018-912.jpg',
    nombre: 'Sytedfsesdfdsfdsfsdfdsfsdfdsfm od',
    artista: 'jmhjsdfwefewtgewtretwertrsdmd,d',
  };

  constructor(private sv: SpotifyService) {}

  ngOnInit(): void {
    this.sv.traerRecomendados().subscribe((e) => {
      
      if (e.tracks.length) {
        this.listaRecomendados = e.tracks.map((album: any) => {
          let objalbum = {
            imagen: album.album.images[0].url,
            nombre:album.album.name,
            artista:album.artists[0].name,
            audio:album.preview_url
            
          };
          return objalbum;
        });
        console.log(this.listaRecomendados)
      }
    });
   
  }
}
