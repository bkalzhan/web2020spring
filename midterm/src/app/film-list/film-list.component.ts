import { Component, OnInit } from '@angular/core';
import { Film } from '../film';
import { FilmsService } from '../films.service';
@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {
  films : Film[];
  constructor( private filmServise : FilmsService) { }

  ngOnInit(): void {
    this.getFilms();
  }

  getFilms(){
    this.filmServise.getFilms().subscribe(films => this.films = films);
  }
}
