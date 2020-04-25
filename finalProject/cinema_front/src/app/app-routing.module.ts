import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmListComponent } from './film-list/film-list.component'
import { TopFilmsComponent } from './top-films/top-films.component'
import { FilmDetailComponent } from './film-detail/film-detail.component'
import { SessionDetailComponent } from './session-detail/session-detail.component'
const routes: Routes = [
  { path: '', component: TopFilmsComponent },
  { path: 'topFilms', component: TopFilmsComponent },
  { path: 'films', component: FilmListComponent },
  { path: 'films/:id', component: FilmDetailComponent},
  { path: 'sessions/:id', component: SessionDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
