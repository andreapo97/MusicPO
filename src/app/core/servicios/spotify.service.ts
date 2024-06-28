import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  url = 'https://spotify23.p.rapidapi.com/';
  options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '511a3bf4b4msh4a91d5cb5efabf4p1a2206jsn7b2cc3c820c9',
      'x-rapidapi-host': 'spotify23.p.rapidapi.com',
    },
  };

  constructor(private http: HttpClient) {}

  traerRecomendados(): Observable<any> {
    return this.http.get(`${this.url}recommendations/?limit=20&seed_tracks=0c6xIDDpzE81m2q797ordA&seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical%2Ccountry`,this.options);
  }

  traerCanciones(nombreCancion : string): Observable<any> {
    return this.http.get(`${this.url}search/?q=${nombreCancion}&type=tracks&offset=0&limit=10&numberOfTopResults=5`,this.options);
  }
  elegircancion(idcancion : any):Observable<any> {
    return this.http.get(`${this.url}tracks/?ids=${idcancion}`,this.options);
  }
}
