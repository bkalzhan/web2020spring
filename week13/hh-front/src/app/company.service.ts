import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Company, Vacancy, LoginResponse} from "./models";
import { COMPANIES } from './dbAll'
@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  BASE_URL = 'http://localhost:8000'
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getCompanyList(): Observable<Company[]> {
    return this.http.get<Company[]>('http://localhost:8000/api/companies/');
  }
  getCompany(id): Observable<Company>{
    return this.http.get<Company>(`${this.BASE_URL}/api/companies/${id}/`)
  }
  getVacanciesOfCompany(id): Observable<Vacancy[]>{
    return this.http.get<Vacancy[]>(`${this.BASE_URL}/api/companies/${id}/vacancies`)
  }
  deleteCompany(id): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/api/companies/${id}/`);
  }
  addCompany(company: Company): Observable<Company> {
    return this.http.post<Company>(`${this.BASE_URL}/api/companies/`, company);
  }

  updateCompany(id, company: Company): Observable<any> {
    return this.http.put(`${this.BASE_URL}/api/companies/${id}/`, company, this.httpOptions);
  }


  login(username, password): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.BASE_URL}/api/login/`, {
      username,
      password
    })
  }
}
