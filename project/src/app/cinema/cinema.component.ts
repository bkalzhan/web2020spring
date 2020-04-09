import { Component, OnInit } from '@angular/core';
import { CityService } from '../city.service'
import { Cinema } from '../cinema'
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.css']
})

export class CinemaComponent implements OnInit {
  id = +this.route.snapshot.paramMap.get('cityId');
  cinemas: Cinema[]
  constructor(private route: ActivatedRoute,
    private cityService : CityService,
    private location: Location) { }

  ngOnInit(): void {
    this.getCinemaByCityId();
  }

  getCinemaByCityId () {
    const id = +this.route.snapshot.paramMap.get('cityId');
    this.cityService.getCinemaByCityId(id).subscribe(cinemas => this.cinemas = cinemas);
  }

  goBack(): void {
    this.location.back();
  }
}
