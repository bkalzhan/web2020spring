import { Component, OnInit } from '@angular/core';
import { CityService } from '../city.service'
import { City } from '../city'

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  cities : City[];
  constructor(private cityService: CityService) { }
  getCities(){
    this.cityService.getCities().subscribe(cities => this.cities = cities)
  }
  ngOnInit(): void {
    this.getCities()
  }

}
