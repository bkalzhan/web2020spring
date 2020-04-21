import { Component, OnInit } from '@angular/core';
import { Vacancy } from '../models'
import { VacancyService } from '../vacancy.service'
@Component({
  selector: 'app-vacancy-list',
  templateUrl: './vacancy-list.component.html',
  styleUrls: ['./vacancy-list.component.css']
})
export class VacancyListComponent implements OnInit {
  vacancies: Vacancy[]
  constructor(public vacancyService: VacancyService) { }

  ngOnInit(): void {
    this.getVacancies()
  }
  getVacancies(){
    this.vacancyService.getVacancyList().subscribe(vacancies => this.vacancies = vacancies)
  }

  add(name: string, description: string, salary: string, company_id: string): void {
    name = name.trim();
    description = description.trim();
    salary = salary.trim();
    company_id = company_id.trim();
    if (!name) { return; }
    if (!description) { return; }
    if (!salary) { return; }
    if (!company_id) { return; }
    this.vacancyService.addVacancy({ name, description, salary, company_id } as unknown as Vacancy).subscribe(vacancy => {this.vacancies.push(vacancy);
      });
      this.getVacancies()
  }
}
