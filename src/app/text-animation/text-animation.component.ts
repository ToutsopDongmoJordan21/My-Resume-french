import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-text-animation',
  templateUrl: './text-animation.component.html',
  styleUrls: ['./text-animation.component.css']
})
export class TextAnimationComponent implements OnInit {

  constructor() { }

  ngOnInit(){
    AOS.init();
  }

}
