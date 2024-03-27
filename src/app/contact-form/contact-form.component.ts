import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  formData: { name: string, email: string, phone: string, subject: string, message: string } = 
  { 
    name: '', 
    email: '',
    phone: '',
    subject: '',
    message: ''
  };
contactForm: any;

  constructor() { }

  ngOnInit(): void {
  }

  submitForm() {
    console.log('Form submitted:', this.formData);
    // You can perform additional actions here, such as sending form data to a server
  }


}
