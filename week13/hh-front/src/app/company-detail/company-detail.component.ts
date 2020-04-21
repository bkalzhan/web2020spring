import { Component, OnInit } from '@angular/core';
import { Vacancy, Company } from './../models';
import { CompanyService } from '../company.service';
import { ActivatedRoute } from '@angular/router';
import { VacancyService } from '../vacancy.service';
@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {
  vacancies: Vacancy[];
  companies: Company;

  constructor(private companyService: CompanyService, 
    private vacancyService: VacancyService, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCompany()
    this.getVacancies()
  }
  getCompany() {
    const id = +this.route.snapshot.paramMap.get('id');

    this.companyService.getCompany(id).subscribe(companies => this.companies = companies);
  }

  getVacancies() {
    const id = +this.route.snapshot.paramMap.get('id');

    this.companyService.getVacanciesOfCompany(id).subscribe(vacancies => this.vacancies = vacancies);
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
    this.vacancyService.addVacancy({ name, description, salary, company_id } as unknown as Vacancy).subscribe(vacancy => {this.vacancies.push(vacancy)
    });
  }

  save(id): void {
    this.companyService.updateCompany(id, this.companies)
      .subscribe();
  }
}
