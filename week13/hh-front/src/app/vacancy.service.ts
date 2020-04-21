import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vacancy } from './models';
@Injectable({
  providedIn: 'root'
})
export class VacancyService {
  BASE_URL = 'http://localhost:8000'
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getVacancyList(): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`${this.BASE_URL}/api/vacancies/`);
  }

  getVacancy(id): Observable<Vacancy> {
    return this.http.get<Vacancy>(`${this.BASE_URL}/api/vacancies/${id}/`);
  }

  getTopTen(): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`${this.BASE_URL}/api/vacancies/sorted`);
  }

  addVacancy(vacancy: Vacancy): Observable<Vacancy> {
    return this.http.post<Vacancy>(`${this.BASE_URL}/api/vacancies/`, vacancy);
  }

  deleteVacancy(id): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/api/vacancies/${id}/`);
  }

  updateVacancy(id, vacancy: Vacancy): Observable<any> {
    return this.http.put(`${this.BASE_URL}/api/vacancies/${id}/`, vacancy, this.httpOptions);
  }
}
