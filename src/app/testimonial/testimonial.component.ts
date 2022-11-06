import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {

  constructor(config: NgbCarouselConfig) {
                config.interval = 4000;
                config.showNavigationArrows = true;
                config.showNavigationIndicators = true;  
                config.wrap = true;  
                config.keyboard = true;  
                config.pauseOnHover = false; 
                }

  ngOnInit(): void {
  }

}
