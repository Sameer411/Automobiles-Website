import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-test-drive-request',
  templateUrl: './test-drive-request.component.html',
  styleUrls: ['./test-drive-request.component.scss']
})
export class TestDriveRequestComponent implements OnInit {
  
  formData: { name: string, email: string, phone: string, subject: string, message: string, car: string, ModelName: string, 
    PriceRange: string } = 
  { 
    name: '', 
    email: '',
    phone: '',
    subject: '',
    message: '',
    car:'',
    ModelName:'',
    PriceRange:''
  };

  constructor() { }

  ngOnInit(): void {
  }

  submitForm() {
    console.log('Form submitted:', this.formData);
    // You can perform additional actions here, such as sending form data to a server
  }
}
