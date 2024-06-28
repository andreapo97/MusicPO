import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReproductorService {

  private listaReproduccionSubject = new BehaviorSubject<any[]>([]);
  listaReproduccion$ = this.listaReproduccionSubject.asObservable();

  private unicaCancionSubject = new BehaviorSubject<any>(null);
  unicaCancion$ = this.unicaCancionSubject.asObservable();

  constructor() { }

  setUnicaCancion(cancion: string): void {
    this.unicaCancionSubject.next(cancion);
  }

  setListaReproduccion(lista: any[]): void {
    this.listaReproduccionSubject.next(lista);
  }


  getListaReproduccion(): any[] {
    return this.listaReproduccionSubject.getValue();
  }

  getUnicaCancion(): any {
    return this.unicaCancionSubject.getValue();
  }



 

}
