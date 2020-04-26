import { Component, OnInit, Input } from '@angular/core';
import { Film } from '../film';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FilmsService } from '../films.service';
@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css']
})
export class FilmDetailComponent implements OnInit {
  @Input()film : Film;
  constructor(
    private route: ActivatedRoute,
    private filmService: FilmsService,
    private location: Location) { }

  ngOnInit(): void {
    this.getFilm();
  }

  getFilm(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.filmService.getFilm(id).subscribe(film => this.film = film);
    this.film.view_count++;
  }

  goBack(){
    this.location.back();
  }
}
