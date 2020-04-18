import { Component, OnInit } from '@angular/core';
import { Vacancy } from '../models'
import { CompanyService } from '../company.service'
@Component({
  selector: 'app-vacancy-list',
  templateUrl: './vacancy-list.component.html',
  styleUrls: ['./vacancy-list.component.css']
})
export class VacancyListComponent implements OnInit {
  vacancies: Vacancy[]
  constructor(public companyService: CompanyService) { }

  ngOnInit(): void {
    this.getVacancies()
  }
  getVacancies(){
    this.companyService.getVacancyList().subscribe(vacancies => this.vacancies = vacancies)
  }
}
