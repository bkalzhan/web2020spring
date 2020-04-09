import { Component, OnInit } from '@angular/core';
import { Film } from '../film'
import { CityService } from '../city.service'
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css']
})
export class FilmDetailComponent implements OnInit {
  film: Film;
  constructor(private route: ActivatedRoute,
    private cityService : CityService,
    private location: Location) { }

  ngOnInit(): void {
    this.getFilm()
  }
  getFilm(){
    const name = this.route.snapshot.paramMap.get('filmName');
    this.cityService.getFilm(name).subscribe(film => this.film = film);
  }
  goBack(): void {
    this.location.back();
  }
}
