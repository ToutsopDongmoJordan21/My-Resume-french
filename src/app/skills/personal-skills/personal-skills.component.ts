import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'personal-skills',
  templateUrl: './personal-skills.component.html',
  styleUrls: ['./personal-skills.component.css']
})
export class PersonalSkillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
