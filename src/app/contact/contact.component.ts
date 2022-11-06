import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as AOS from 'aos';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  registrationForm!: FormGroup;

  get usernameControl() {
     return this.registrationForm.get('username') as FormControl;
   }
   
   get emailControl() {
     return this.registrationForm.get('email') as FormControl;
   }

   get textControl() {
     return this.registrationForm.get('text') as FormControl;
   }
  constructor(
    private firebaseService: DatabaseService,
              private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    AOS.init();
    this.initForm();
  }

  contacts = [
    {icon: 'fa-github', href: 'https://https://github.com/ToutsopDongmoJordan21' },
    {icon: 'fa-google', href: 'https://stackoverflow.com/Toutsop-Jordan' },
    {icon: 'fa-linkedin', href: 'https://www.linkedin.com/in/jordan-toutsop-6b2b731a1/' },
    {icon: 'fa-facebook', href: 'https://www.facebook.com/Jordan-Toutsop/' },
    {icon: 'fa-twitter', href: 'https://twitter.com/Toutsop-Jordan' },
    {icon: 'fa-dribbble', href: 'https://twitter.com/Toutsop-Jordan' },
  ]

  initForm() {
    this.registrationForm = this.formBuilder.group({
            username: ['', [Validators.required, Validators.minLength(3)]],
            email: ['', [Validators.required, Validators.email]],
            text: ['', [Validators.required, Validators.minLength(3)]],

    });
  }

  onSubmit() {
        const username = this.registrationForm.get('username')!.value;
        const email = this.registrationForm.get('email')!.value;
        const text = this.registrationForm.get('text')!.value;

        this.firebaseService.createMessage(username,email,text);
        alert('message sent!!!!');

  }
}
