import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyListComponent } from './company-list/company-list.component'
import { VacancyListComponent } from './vacancy-list/vacancy-list.component'
import { CompanyDetailComponent } from './company-detail/company-detail.component'
import { VacancyDetailComponent } from './vacancy-detail/vacancy-detail.component'
const routes: Routes = [
  { path: '', component: CompanyListComponent },
  { path: 'companies', component: CompanyListComponent },
  { path: 'companies/:id', component: CompanyDetailComponent },
  { path: 'vacancies', component: VacancyListComponent },
  { path: 'vacancies/:id', component: VacancyDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
