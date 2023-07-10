import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PaymentComponent } from './payment/payment.component';
import { SuccessComponent } from './success/success.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { StaffComponent } from './staff/staff.component';
import { UserAuthComponent } from './user-auth/user-auth.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'payment',
    component: PaymentComponent,
  },
  {
    path: 'success',
    component: SuccessComponent,
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  {path:'register',component:RegisterComponent},

  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path : 'admin',
    component : AdminComponent,
  },
  {
    path : 'staff',
    component : StaffComponent,
  },
  {
    path : 'userlogin',
    component : UserloginComponent,
  },
  {
    path : 'user-auth',
    component : UserAuthComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
