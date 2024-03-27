import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceAppointmentFormComponent } from './service-appointment-form.component';

describe('ServiceAppointmentFormComponent', () => {
  let component: ServiceAppointmentFormComponent;
  let fixture: ComponentFixture<ServiceAppointmentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceAppointmentFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceAppointmentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
