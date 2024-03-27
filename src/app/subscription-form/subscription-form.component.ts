import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.scss']
})
export class SubscriptionFormComponent implements OnInit {

  formData: { name: string, email: string, phone: string } = 
  { 
    name: '', 
    email: '',
    phone: ''
  };
contactForm: any;

  constructor() { }

  ngOnInit(): void {
  }

  submitForm() {
    console.log('Form submitted:', this.formData);
    // You can perform additional actions here, such as sending form data to a server
  }
  
  selectedServices: { [key: string]: boolean } = {};
}
