import { Component, OnInit } from '@angular/core';
import { Car } from '../car.model';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})

export class CarComponent implements OnInit {
  cars: Car[] = [
    {
      image: 'https://imgd.aeplcdn.com/310x174/n/cw/ec/130591/fronx-exterior-right-front-three-quarter-109.jpeg?isig=0&q=80',
      name: 'Maruti Fronx',
      modelNumber: '2021',
      price: 26000,
      mileage: '14',
    },
    {
      image: 'https://imgd.aeplcdn.com/310x174/n/cw/ec/168697/creta-n-line-exterior-right-front-three-quarter-2.png?isig=0&q=80',
      name: 'Hyundai Creta N Line',
      modelNumber: '2022',
      price: 25000,
      mileage: '15',
    },
    {
      image: 'https://imgd.aeplcdn.com/310x174/n/cw/ec/40432/scorpio-n-exterior-right-front-three-quarter-75.jpeg?isig=0&q=80',
      name: 'Mahindra Scorpio N',
      modelNumber: '2023',
      price: 22000,
      mileage: '16',
    },
    {
      image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/40087/thar-exterior-right-front-three-quarter-35.jpeg?isig=0&q=80',
      name: 'Mahindra Thar',
      modelNumber: '2024',
      price: 30000,
      mileage: '14',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  getCardColor(price: number): string {
    if (price > 25000) {
      return 'rgb(1, 194, 181)';
    } else if (price === 25000) {
      return 'rgb(127, 230, 79)';
    } else {
      return 'rgb(176, 157, 192)';
    }
  }

}
