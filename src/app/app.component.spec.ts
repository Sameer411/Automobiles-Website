import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CarComponent } from './car/car.component'; 
import { FooterComponent } from './footer/footer.component'; 
import { NavigationComponent } from './navigation/navigation.component'; 
import { AuthenticationService } from './authentication.service';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { DeliveryInformationComponent } from './delivery-information/delivery-information.component';
import { TestDriveRequestComponent } from './test-drive-request/test-drive-request.component';
import { SubscriptionFormComponent } from './subscription-form/subscription-form.component';
import { ServiceAppointmentFormComponent } from './service-appointment-form/service-appointment-form.component';
import { VehicleCustomizationRequestFormComponent } from './vehicle-customization-request-form/vehicle-customization-request-form.component';

describe('AppComponent', () => {
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Automobiles'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Automobiles');
  });

  it('should create the app about us component', () => {
    const fixture = TestBed.createComponent(AboutusComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should create the app car component', () => {
    const fixture = TestBed.createComponent(CarComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should create the app footer component', () => {
    const fixture = TestBed.createComponent(FooterComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
  
  it('should create the app Navigation component', () => {
    const fixture = TestBed.createComponent(NavigationComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should be created', () => {
    expect(AuthenticationService).toBeTruthy();
  });

});

describe('ContactFormComponent',() =>{

  let component: ContactFormComponent;
  let fixture: ComponentFixture<ContactFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactFormComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should enable submit button when form is valid', () => {
    const compiled = fixture.debugElement.nativeElement;
    const form = compiled.querySelector('form');
    const submitButton = compiled.querySelector('button[type="submit"]');

    // fill the form with valid data
    component.formData = {
      name: 'John Doe',
      email: 'john@example.com',
      phone: '1234567890',
      subject: 'Test Subject',
      message: 'Test Message',
      };

    form.dispatchEvent(new Event('ngSubmit'));
    fixture.detectChanges();

    expect(submitButton.disabled).toBe(false);
  });

  it('should create the app contact form component ', () => {
    const fixture = TestBed.createComponent(ContactFormComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});

describe('DeliveryInformationComponent',() =>{

  let component: DeliveryInformationComponent;
  let fixture: ComponentFixture<DeliveryInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryInformationComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app delivery information form component ', () => {
    const fixture = TestBed.createComponent(DeliveryInformationComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});

describe('TestDriveRequestComponent',() =>{

  let component: TestDriveRequestComponent;
  let fixture: ComponentFixture<TestDriveRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestDriveRequestComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDriveRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  it('should create the app test drive request component ', () => {
    const fixture = TestBed.createComponent(TestDriveRequestComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});

describe('ServiceAppointmentFormComponent',() =>{

  let component: ServiceAppointmentFormComponent;
  let fixture: ComponentFixture<ServiceAppointmentFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceAppointmentFormComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceAppointmentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should enable submit button when form is valid', () => {
    const compiled = fixture.debugElement.nativeElement;
    const form = compiled.querySelector('form');
    const submitButton = compiled.querySelector('button[type="submit"]');

    // fill the form with valid data
    component.formData = {
      name: 'John Doe',
      email: 'johndoe@example.com',
      phone: '1234567890',
      Date: '2024-03-27', // Sample date
      Time: '09:00', // Sample time
      message: 'This is an urgent requirement' // Sample additional comments    
      };

    form.dispatchEvent(new Event('ngSubmit'));
    fixture.detectChanges();

    expect(submitButton.disabled).toBe(false);
  });

  it('should create the app service appointment form component ', () => {
    const fixture = TestBed.createComponent(ServiceAppointmentFormComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});

describe('SubscriptionFormComponent',() =>{

  let component: SubscriptionFormComponent;
  let fixture: ComponentFixture<SubscriptionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriptionFormComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should enable submit button when form is valid', () => {
    const compiled = fixture.debugElement.nativeElement;
    const form = compiled.querySelector('form');
    const submitButton = compiled.querySelector('button[type="submit"]');

    // fill the form with valid data
    component.formData = {
      name: 'John Doe',
      email: 'johndoe@example.com',
      phone: '1234567890'
      };

    form.dispatchEvent(new Event('ngSubmit'));
    fixture.detectChanges();

    expect(submitButton.disabled).toBe(false);
  });

  it('should create the app subscription form component ', () => {
    const fixture = TestBed.createComponent(SubscriptionFormComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});

describe('VehicleCustomizationRequestFormComponent',() =>{

  let component: VehicleCustomizationRequestFormComponent;
  let fixture: ComponentFixture<VehicleCustomizationRequestFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleCustomizationRequestFormComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleCustomizationRequestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should enable submit button when form is valid test 1', () => {
    const compiled = fixture.debugElement.nativeElement;
    const form = compiled.querySelector('form');
    const submitButton = compiled.querySelector('button[type="submit"]');

    // fill the form with valid data
    component.formData = {
      name: 'John Doe',
      email: 'johndoe@example.com',
      phone: '1234567890',
      subject: '',
      message: '',
      Vname: '',
      Model: '',
      };

    form.dispatchEvent(new Event('ngSubmit'));
    fixture.detectChanges();

    expect(submitButton.disabled).toBe(false);
  });

  it('should create the app vehicle customization request form component ', () => {
    const fixture = TestBed.createComponent(VehicleCustomizationRequestFormComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});