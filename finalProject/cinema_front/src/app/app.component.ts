import { Component } from '@angular/core';
import { FilmService } from './film.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project-front';

  logged = false;

  username = '';
  password = '';
  name = '';

  constructor(private filmService: FilmService) {}

  ngOnInit() {
    let token = localStorage.getItem('token');
    if (token) {
      this.logged = true;
    }
  }
  
  login(){
    this.filmService.login(this.username, this.password)
      .subscribe(res => { 
        localStorage.setItem('token', res.token);

        this.logged = true;

        this.username = '';
        this.password = '';
      });
  }

  logout() {
    localStorage.clear();
    this.logged = false;
  }
}
