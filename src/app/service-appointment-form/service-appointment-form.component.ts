import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-service-appointment-form',
  templateUrl: './service-appointment-form.component.html',
  styleUrls: ['./service-appointment-form.component.scss']
})
export class ServiceAppointmentFormComponent implements OnInit {

  formData: { name: string; email: string; phone: string; Date: string; Time: string; message: string; } = 
  { 
    name: '', 
    email: '',
    phone: '',
    message: '',
    Date: '',
    Time: '',
  };

  contactForm: any;

  ngOnInit(): void {
  }

  submitForm() {
    console.log('Form submitted:', this.formData);
    // You can perform additional actions here, such as sending form data to a server
  }

  selectedServices: { [key: string]: boolean } = {};

  constructor() {  }

}
