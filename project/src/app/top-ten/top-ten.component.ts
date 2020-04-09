import { Component, OnInit, Input } from '@angular/core';
import { Film } from '../film'
import { CityService } from '../city.service'

@Component({
  selector: 'app-top-ten',
  templateUrl: './top-ten.component.html',
  styleUrls: ['./top-ten.component.css']
})
export class TopTenComponent implements OnInit {
  films: Film[];
  constructor(private cityService : CityService) { }

  ngOnInit(): void {
    this.getFilms()
  }
  getFilms(){
    this.cityService.getFilms().subscribe(films => this.films = films.slice(1, 9))
  }
}
