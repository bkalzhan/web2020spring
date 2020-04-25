import { Component, OnInit } from '@angular/core';
import { Film, Session } from '../models'
import { FilmService } from '../film.service'
import { ActivatedRoute } from '@angular/router';
import  { SessionService } from '../session.service'
@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css']
})
export class FilmDetailComponent implements OnInit {
  film: Film
  sessions: Session[]
  constructor(private route: ActivatedRoute,public filmService : FilmService, private sessionService: SessionService) { }

  ngOnInit(): void {
    this.getFilm()
    this.getSessionsOfFilm()
  }

  getFilm(){
    const id =+ this.route.snapshot.paramMap.get('id');
    this.filmService.getFilm(id).subscribe(film=>this.film=film);
  }

  getSessionsOfFilm(){
    const id =+ this.route.snapshot.paramMap.get('id');
    this.filmService.getSessionsOfFilm(id).subscribe(sessions=>this.sessions=sessions);
  }

  add(time: string,price: string, film_id: string): void {
    time = time.trim();
    price = price.trim();
    film_id = film_id.trim();
    if (!time) { return; }
    if (!price) { return; }
    if (!film_id) { return; }
    this.sessionService.addSession({ time, price, film_id }as unknown  as Session)
      .subscribe(session => {
        this.sessions.push(session);
      });
  }
}
