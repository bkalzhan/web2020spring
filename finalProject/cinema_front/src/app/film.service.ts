import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Film, Session, LoginResponse } from './models'

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  BASE_URL = 'http://localhost:8000'
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }


  getFilms(): Observable<Film[]> {
    return this.http.get<Film[]>('http://localhost:8000/api/films/');
  }
  getTopFilms(): Observable<Film[]>{
    return this.http.get<Film[]>(`${this.BASE_URL}/api/films/sorted/`)
  }
  getFilm(id): Observable<Film>{
    return this.http.get<Film>(`${this.BASE_URL}/api/films/${id}/`)
  }
  getSessionsOfFilm(id): Observable<Session[]>{
    return this.http.get<Session[]>(`${this.BASE_URL}/api/films/${id}/sessions`)
  }
  deleteFilm(id): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/api/films/${id}/`);
  }
  addFilm(film: Film): Observable<Film> {
    return this.http.post<Film>(`${this.BASE_URL}/api/films/`, film);
  }

  updateFilm(id, film: Film): Observable<any> {
    return this.http.put(`${this.BASE_URL}/api/films/${id}/`, film, this.httpOptions);
  }
  login(username, password): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.BASE_URL}/api/login/`, {
      username,
      password
    })
  }
}
