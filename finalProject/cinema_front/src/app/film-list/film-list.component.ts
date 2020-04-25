import { Component, OnInit } from '@angular/core';
import { Film } from '../models'
import { FilmService } from '../film.service'

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {
  films : Film[]=[]
  film: Film
  constructor(public filmService : FilmService) { }

  ngOnInit(): void {
    this.getFilms()
  }
  getFilms(){
    this.filmService.getFilms().subscribe(films => {this.films = films})
  }
  deleteFilm(id) {
    this.filmService.deleteFilm(id).subscribe(res => {
    });
    this.getFilms()
  }

  add(title: string,rating: string, description: string, country: string, year: string, genre: string, imgUrl:string): void {
    title = title.trim();
    rating = rating.trim();
    description = description.trim();
    country = country.trim();
    year = year.trim();
    genre = genre.trim();
    imgUrl = imgUrl.trim();
    if (!name) { return; }
    if (!rating) { return; }
    if (!description) { return; }
    if (!country) { return; }
    if (!year) { return; }
    if (!genre) { return; }
    if (!imgUrl) { return; }
    this.filmService.addFilm({ title, rating, description, country, year, genre, imgUrl }as unknown  as Film)
      .subscribe(film => {
        this.films.push(film);
      });
  }
}
