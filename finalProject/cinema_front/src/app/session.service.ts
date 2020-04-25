import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Session, Hall } from './models'

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  BASE_URL = 'http://localhost:8000'
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getSession(id): Observable<Session>{
    return this.http.get<Session>(`${this.BASE_URL}/api/sessions/${id}/`)
  }
  getHallsOfSession(id): Observable<Hall[]>{
    return this.http.get<Hall[]>(`${this.BASE_URL}/api/sessions/${id}/hall`)
  }
  deleteHall(id): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/api/halls/${id}/`);
  }
  addHall(hall: Hall): Observable<Hall> {
    return this.http.post<Hall>(`${this.BASE_URL}/api/halls/`, hall);
  }
  updateSession(id, session: Session): Observable<any> {
    return this.http.put(`${this.BASE_URL}/api/sessions/${id}/`, session, this.httpOptions);
  }
  addSession(session: Session): Observable<Session>{
    return this.http.post<Session>(`${this.BASE_URL}/api/sessions/`, session)
  }
}
