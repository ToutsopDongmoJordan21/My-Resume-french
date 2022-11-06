import { Component, OnInit, HostListener } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'professional-skills',
  templateUrl: './professional-skills.component.html',
  styleUrls: ['./professional-skills.component.css']
})
export class ProfessionalSkillsComponent implements OnInit {
  animate: boolean = false ;
  progress :any[];

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }
  courses = [
    {percent: '93', subTitle: 'HTML'},
    {percent: '90', subTitle: 'CSS3'},
    {percent: '95', subTitle: 'BootStrap4'},
    {percent: '85', subTitle: 'Angular'},
    {percent: '90', subTitle: 'GIT, Firebase'},
    {percent: '65', subTitle: 'Photoshop CS6'},
    {percent: '92', subTitle: 'Microsoft Office'},
  ]  ;
  @HostListener("window:scroll", [])
  onWindowScroll() {
    const height = window.pageXOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (height > 1700) {
      this.animate = true;
    }
  }
}