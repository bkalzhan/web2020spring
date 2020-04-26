import { Injectable } from '@angular/core';
import { Film } from './film';
import { FILMS } from './films';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FilmsService {
  getFilms(): Observable<Film[]>{
    return of (FILMS);
  }
  getFilm(id: number): Observable<Film>{
    return of (FILMS.find(film => film.id === id));
  }
  constructor() { }
}
