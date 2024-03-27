import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-vehicle-customization-request-form',
  templateUrl: './vehicle-customization-request-form.component.html',
  styleUrls: ['./vehicle-customization-request-form.component.scss']
})
export class VehicleCustomizationRequestFormComponent implements OnInit {

  formData: { name: string, email: string, phone: string, subject: string, message: string, Vname: string, Model: string } = 
  { 
    name: '', 
    email: '',
    phone: '',
    subject: '',
    message: '',
    Vname: '',
    Model: ''
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
