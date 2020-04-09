import { Component, OnInit, Input } from '@angular/core';
import { CityService } from '../city.service'
import { Cinema } from '../cinema'
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Day } from '../day'
import { ThFilm } from '../thFilm'
import { Film } from '../film';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {
  id = +this.route.snapshot.paramMap.get('cityId');
  @Input() cinema: Cinema;
  @Input() day : Day;
  @Input() films: ThFilm[];
  @Input() film1: Film;
  constructor(private route: ActivatedRoute,
    private cityService : CityService,
    private location: Location) { }

  ngOnInit(): void {
    this.getCinema()
    this.getDaysOfCinema()
    this.getFilmsOfday()
  }
  getCinema(){
    const id = +this.route.snapshot.paramMap.get('cinemaId');
    this.cityService.getCinema(id).subscribe(cinema => this.cinema = cinema);
  }

  getDaysOfCinema(){
    const id = +this.route.snapshot.paramMap.get('cinemaId');
    const dayName = this.route.snapshot.paramMap.get('nameOfDay');
    this.cityService.getDayByCinema(id, dayName).subscribe(day => this.day = day);
  }
  getFilmsOfday(){
    const id = +this.route.snapshot.paramMap.get('cinemaId');
    const dayName = this.route.snapshot.paramMap.get('nameOfDay');
    this.cityService.getFilmsOfDay(id, dayName).subscribe(films => this.films = films);
  }
  goBack(): void {
    this.location.back();
  }
  getFilm(name:string){
    this.cityService.getFilm(name).subscribe(film1=>this.film1=film1)
    //window.alert('Hello')
  }
}
