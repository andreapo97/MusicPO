import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-listas-reproduccion',
  templateUrl: './listas-reproduccion.component.html',
  styleUrl: './listas-reproduccion.component.css'
})
export class ListasReproduccionComponent {

  listasReproduccion : any [] = []

  formulariolista: FormGroup = this.fb.group({
    nombre: ['', Validators.required],
    descripcion: ['', Validators.required],
  });


  constructor(private fb : FormBuilder ){

  }

  crear(){
    if(this.formulariolista.valid){
      let lista = {
        index: this.listasReproduccion.length +1,
        imagen: 'https://wpdirecto.com/wp-content/uploads/2017/08/alt-de-una-imagen.png',
        cancion: this.formulariolista.get('nombre')?.value,
        artista: this.formulariolista.get('descripcion')?.value,
        duracion: 0
      }
      this.listasReproduccion.push(lista)
      this.formulariolista.reset()
    }
  }
}
