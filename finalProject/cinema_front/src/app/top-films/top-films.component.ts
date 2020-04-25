import { Component, OnInit } from '@angular/core';
import { Film } from '../models'
import { FilmService } from '../film.service'

@Component({
  selector: 'app-top-films',
  templateUrl: './top-films.component.html',
  styleUrls: ['./top-films.component.css']
})
export class TopFilmsComponent implements OnInit {
  films : Film[]=[]
  film: Film
  public name = '';
  constructor(public filmService : FilmService) { }

  ngOnInit(): void {
    this.getTopFilms()
  }
  getTopFilms(){
    this.filmService.getTopFilms().subscribe(films => {this.films = films})
  }
}
