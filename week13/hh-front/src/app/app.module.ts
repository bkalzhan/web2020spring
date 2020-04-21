import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { VacancyListComponent } from './vacancy-list/vacancy-list.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {AuthInterceptor} from "./auth.intercept";
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { VacancyDetailComponent } from './vacancy-detail/vacancy-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyListComponent,
    VacancyListComponent,
    CompanyDetailComponent,
    VacancyDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
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
