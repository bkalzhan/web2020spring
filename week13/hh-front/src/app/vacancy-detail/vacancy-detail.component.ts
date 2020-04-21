import { Component, OnInit } from '@angular/core';
import { Company, Vacancy } from '../models'
import { VacancyService } from '../vacancy.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vacancy-detail',
  templateUrl: './vacancy-detail.component.html',
  styleUrls: ['./vacancy-detail.component.css']
})
export class VacancyDetailComponent implements OnInit {
  vacancy: Vacancy;
  sorted: Vacancy[] = [];

  constructor(private vacancyService: VacancyService,  
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getTopFive();
    this.getVacancy();
  }
  getVacancy() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.vacancyService.getVacancy(id).subscribe(vacancy => this.vacancy = vacancy);
  }

  getTopFive() {
    this.vacancyService.getTopTen()
      .subscribe(sorted => {
        this.sorted = sorted;
      });
  }

  save(id): void {
    this.vacancyService.updateVacancy(id, this.vacancy)
      .subscribe();
  }

  deleteVacancy(id) {
    this.vacancyService.deleteVacancy(id).subscribe(res => {
    });
  }
}
