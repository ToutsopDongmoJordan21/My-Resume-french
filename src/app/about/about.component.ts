import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';
import { Observable } from 'rxjs';
import { NgAnimateScrollService } from 'ng-animate-scroll';
import AOS from 'aos';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  about$ ;
  constructor(
    private dbServ: DatabaseService
  ) {
    this.about$ = this.dbServ.getabout();
  }

  ngOnInit(){
    AOS.init();
  }

}
