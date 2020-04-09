import { Component, OnInit, Input } from '@angular/core';
import { CityService } from '../city.service'
import { Cinema } from '../cinema'
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Day } from '../day'
import { ThFilm } from '../thFilm'
import { Session } from '../session'

@Component({
  selector: 'app-session-detail',
  templateUrl: './session-detail.component.html',
  styleUrls: ['./session-detail.component.css']
})
export class SessionDetailComponent implements OnInit {
  id = +this.route.snapshot.paramMap.get('cityId');
  @Input() cinema: Cinema;
  @Input() day : Day;
  @Input() film: ThFilm;
  @Input() session: Session;
  constructor(private route: ActivatedRoute,
    private cityService : CityService,
    private location: Location) { }

  ngOnInit(): void {
    this.getCinema()
    this.getDaysOfCinema()
    this.getFilmOfday()
    this.getSession()
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
  getFilmOfday(){
    const id = +this.route.snapshot.paramMap.get('cinemaId');
    const dayName = this.route.snapshot.paramMap.get('nameOfDay');
    const filmName = this.route.snapshot.paramMap.get('filmName');
    this.cityService.getFilmOfDay(id, dayName, filmName).subscribe(film => this.film = film);
  }

  getSession(){
    const id = +this.route.snapshot.paramMap.get('cinemaId');
    const dayName = this.route.snapshot.paramMap.get('nameOfDay');
    const filmName = this.route.snapshot.paramMap.get('filmName');
    const sessionTime = this.route.snapshot.paramMap.get('session');
    this.cityService.getSession(id, dayName, filmName, sessionTime).subscribe(session => this.session = session)
  }
  goBack(): void {
    this.location.back();
  }
}
