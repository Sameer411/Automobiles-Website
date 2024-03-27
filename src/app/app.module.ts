import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CarComponent } from './car/car.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { TestDriveRequestComponent } from './test-drive-request/test-drive-request.component';
import { DeliveryInformationComponent } from './delivery-information/delivery-information.component';
import { SubscriptionFormComponent } from './subscription-form/subscription-form.component';
import { VehicleCustomizationRequestFormComponent } from './vehicle-customization-request-form/vehicle-customization-request-form.component';

import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { ServiceAppointmentFormComponent } from './service-appointment-form/service-appointment-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    CarComponent,
    FooterComponent,
    NavigationComponent,
    ContactFormComponent,
    TestDriveRequestComponent,
    DeliveryInformationComponent,
    SubscriptionFormComponent,
    VehicleCustomizationRequestFormComponent,
    ServiceAppointmentFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
