import { Component, OnInit } from '@angular/core';
import { Company } from '../models'
import { CompanyService } from '../company.service'

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})

export class CompanyListComponent implements OnInit {
  companies : Company[]=[]
  company: Company
  public name = '';
  
  constructor(public companyService : CompanyService) { }

  ngOnInit(): void {
    this.getCompanies()
  }
  getCompanies(){
    this.companyService.getCompanyList().subscribe(companies => {this.companies = companies})
  }
  deleteCompany(id) {
    this.companyService.deleteCompany(id).subscribe(res => {
    });
  }

  add(name: string, description: string, city: string, address: string): void {
    name = name.trim();
    description = description.trim();
    city = city.trim();
    address = address.trim();
    if (!name) { return; }
    if (!description) { return; }
    if (!city) { return; }
    if (!address) { return; }
    this.companyService.addCompany({ name, description, city, address } as Company)
      .subscribe(company => {
        this.companies.push(company);
      });
  }
}
