import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CitiesComponent } from './cities/cities.component';
import { CinemaComponent } from './cinema/cinema.component';
import { CinemaDetailComponent } from './cinema-detail/cinema-detail.component';
import { FilmListComponent } from './film-list/film-list.component';
import { SessionDetailComponent } from './session-detail/session-detail.component';
import { TopTenComponent } from './top-ten/top-ten.component';
import { FilmDetailComponent } from './film-detail/film-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CitiesComponent,
    CinemaComponent,
    CinemaDetailComponent,
    FilmListComponent,
    SessionDetailComponent,
    TopTenComponent,
    FilmDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
