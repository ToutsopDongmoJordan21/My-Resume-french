import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  contacts = [
    {icon: 'fa-github', href: 'https://https://github.com/ToutsopDongmoJordan21' },
    {icon: 'fa-stack-overflow', href: 'https://stackoverflow.com/Toutsop-Jordan' },
    {icon: 'fa-linkedin', href: 'https://www.linkedin.com/in/jordan-toutsop-6b2b731a1/' },
    {icon: 'fa-facebook', href: 'https://www.facebook.com/Jordan-Toutsop/' },
    {icon: 'fa-twitter', href: 'https://twitter.com/Toutsop-Jordan' },
  ]
}
