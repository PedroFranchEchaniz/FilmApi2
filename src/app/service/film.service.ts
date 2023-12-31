import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FilmResponse } from '../model/film-list-interface';
import { Filmroot } from '../model/film-detail-interface';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http: HttpClient) { }

  getFilmList(): Observable<FilmResponse> {
    return this.http.get<FilmResponse>('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=cb240d50801976c6f75926069581b0e3')
  }

  getPag(pag: number): Observable<FilmResponse> {
    return this.http.get<FilmResponse>(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${pag}&sort_by=popularity.desc&api_key=cb240d50801976c6f75926069581b0e3`);
  }

  findById(id: number): Observable<Filmroot> {
    return this.http.get<Filmroot>(`https://api.themoviedb.org/3/movie/${id}?api_key=cb240d50801976c6f75926069581b0e3`)
  }
}
