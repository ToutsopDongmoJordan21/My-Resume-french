import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    AOS.init();
  }

  // experience = [
  //   { jobTitle: 'Technical Office Engineer at TST for Integrated Solutions',
  //    city: ' Maadi, Cairo ', date: 'October 2019 – August 2020',
  //     jobDescriotion:'Preparing quotations, submittals and tenders (catalogues, samples). In Data Structure Cabling , CCTV System, Fire Alarm System, Access Control System Develop work breakdown structures (WBS) and system bill of materials (BOM) for proposed solutions.',
  //      delay: '150'},
  //   { jobTitle: 'Office Manager at TST for Integrated Solutions',
  //    city: 'Maadi Cairo', date: 'June 2019 – October 2019'
  //    , jobDescriotion:'Preparing invoices, purchase orders, submittals, tenders and arranging payment terms. Good organization skills with the ability to multi task and priorities. Perform other assigned duties as deemed necessary by their supervisor.',
  //     delay: '300'},
  //   { jobTitle: 'Customer Service Agent at Orange Egypt',
  //    city: 'Hazem-Hassan, Giza', date: 'February 2019 - June 2019',
  //     jobDescriotion:'Receiving Customers’ Calls, answering their questions and inquiries and taking necessary actions to make them satisfied. Informing Customers about new offers and services. Adding and deleting services. Handling complaints about network problems .',
  //     delay: '450'},
  // ]

}
