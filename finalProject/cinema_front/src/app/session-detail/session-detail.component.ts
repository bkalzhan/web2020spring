import { Component, OnInit } from '@angular/core';
import { Session, Hall } from '../models'
import { SessionService } from '../session.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-session-detail',
  templateUrl: './session-detail.component.html',
  styleUrls: ['./session-detail.component.css']
})
export class SessionDetailComponent implements OnInit {
  session : Session
  halls : Hall[]

  constructor(private route: ActivatedRoute, public sessionService: SessionService) { }

  ngOnInit(): void {
    this.getSession()
    this.getHallsOfSession()
  }

  getSession(){
    const id =+ this.route.snapshot.paramMap.get('id');
    this.sessionService.getSession(id).subscribe(session => this.session = session)
  }
  getHallsOfSession(){
    const id =+ this.route.snapshot.paramMap.get('id');
    this.sessionService.getHallsOfSession(id).subscribe(halls => this.halls = halls)
  }
  save(id) : void{
    this.sessionService.updateSession(id, this.session).subscribe()
  }
  add(place: string,session_id: string): void {
    place = place.trim();
    session_id = session_id.trim();
    if (!place) { return; }
    if (!session_id) { return; }
    this.sessionService.addHall({ place, brought:false, session_id }as unknown  as Hall)
      .subscribe(hall => {
        this.halls.push(hall);
      });
  }
}
