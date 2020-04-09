import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CitiesComponent } from './cities/cities.component'
import { CinemaComponent } from './cinema/cinema.component';
import { CinemaDetailComponent } from './cinema-detail/cinema-detail.component'
import { FilmListComponent } from './film-list/film-list.component'
import { SessionDetailComponent } from './session-detail/session-detail.component'
import { FilmDetailComponent } from './film-detail/film-detail.component';



const routes: Routes = [
  { path: '', redirectTo: '/cities', pathMatch: 'full' },
  { path: 'cities', component: CitiesComponent},
  { path: 'cities/:cityId/cinemas', component: CinemaComponent},
  { path: 'cities/:cityId/cinemas/:cinemaId', component: CinemaDetailComponent},
  { path: 'cities/:cityId/cinemas/:cinemaId/:nameOfDay/films', component: FilmListComponent},
  { path: 'cities/:cityId/cinemas/:cinemaId/:nameOfDay/films/:filmName/:session', component: SessionDetailComponent},
  { path: 'films/:filmName', component: FilmDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
