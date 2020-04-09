import { Component, OnInit, Input } from '@angular/core';
import { CityService } from '../city.service'
import { Cinema } from '../cinema'
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Day } from '../day'

@Component({
  selector: 'app-cinema-detail',
  templateUrl: './cinema-detail.component.html',
  styleUrls: ['./cinema-detail.component.css']
})
export class CinemaDetailComponent implements OnInit {
  id = +this.route.snapshot.paramMap.get('cityId');
  @Input() cinema: Cinema;
  @Input() days : Day[];
  constructor(private route: ActivatedRoute,
    private cityService : CityService,
    private location: Location) { }

  ngOnInit(): void {
    this.getCinema()
    this.getDaysOfCinema()
  }

  getCinema(){
    const id = +this.route.snapshot.paramMap.get('cinemaId');
    this.cityService.getCinema(id).subscribe(cinema => this.cinema = cinema);
  }

  getDaysOfCinema(){
    const id = +this.route.snapshot.paramMap.get('cinemaId');
    this.cityService.getDaysByCinema(id).subscribe(days => this.days = days);
  }
  goBack(): void {
    this.location.back();
  }
}
