import { Injectable } from '@angular/core';
import { City } from './city'
import { Cinema } from './cinema'
import { CINEMAS, CITIES, FILMS} from './dbAll'
import { Day } from './day'
import { Observable, of } from 'rxjs';
import { ThFilm } from './thFilm'
import { Session } from './session'
import { Film } from './film'
@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor() { }
  getFilms(): Observable<Film[]>{
    return of (FILMS)
  }
  getFilm(name: string): Observable<Film>{
    return of (FILMS.find(film => film.name === name))
  }
  getCities() : Observable<City[]> {
    return of (CITIES);
  }
  getCinemaByCityId(id: number) : Observable<Cinema[]> {
    return of (CINEMAS.filter(cinema => cinema.city_id === id));
  }
  getCinema(id:number): Observable<Cinema>{
    return of (CINEMAS.find(cinema => cinema.id ===id));
  }
  getDaysByCinema(id:number): Observable<Day[]>{
    return  of (CINEMAS.find(cinema => cinema.id ===id).day)
  }
  getDayByCinema(id:number, dayName:string): Observable<Day>{
    return  of (CINEMAS.find(cinema => cinema.id ===id).day.find(day=>day.name==dayName))
  }
  getFilmsOfDay(id:number, dayName:string):Observable<ThFilm[]>{
    return of (CINEMAS.find(cinema => cinema.id ===id).day.find(day=>day.name==dayName).films)
  }
  getFilmOfDay(id:number, dayName:string, filmName: string):Observable<ThFilm>{
    return of (CINEMAS.find(cinema => cinema.id ===id).day.find(day=>day.name==dayName).films.find(film=>film.name=filmName))
  }
  getSession(id:number, dayName:string, filmName: string, sessionTime:string):Observable<Session>{
    return of (CINEMAS.find(cinema => cinema.id ===id).day.find(day=>day.name==dayName).films.find(film=>film.name=filmName).sessions.find(session=>session.time=sessionTime))
  }
}
