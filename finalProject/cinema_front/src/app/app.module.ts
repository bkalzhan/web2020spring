import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {AuthInterceptor} from "./auth.intercept";
import { FilmListComponent } from './film-list/film-list.component';
import { TopFilmsComponent } from './top-films/top-films.component';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { SessionDetailComponent } from './session-detail/session-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmListComponent,
    TopFilmsComponent,
    FilmDetailComponent,
    SessionDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
