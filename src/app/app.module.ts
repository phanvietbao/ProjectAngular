import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { FormsModule } from '@angular/forms';
import { PaymentComponent } from './payment/payment.component';
import { NgxPayPalModule } from 'ngx-paypal';
import { SuccessComponent } from './success/success.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { StaffComponent } from './staff/staff.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
@NgModule({
  declarations: [AppComponent, HomeComponent, PaymentComponent, SuccessComponent, RegisterComponent, LoginComponent, AdminComponent, StaffComponent, UserloginComponent, UserAuthComponent,],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPayPalModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
