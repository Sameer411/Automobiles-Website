import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-delivery-information',
  templateUrl: './delivery-information.component.html',
  styleUrls: ['./delivery-information.component.scss']
})
export class DeliveryInformationComponent implements OnInit {

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
  
  selectedDeliveryType: string = 'pickup';
  deliveryAddress: string = '';

  deliveryTypeChanged() {
    if (this.selectedDeliveryType !== 'delivery') {
      this.deliveryAddress = ''; // Clear the address if delivery type is not 'delivery'
    }
  }

}
