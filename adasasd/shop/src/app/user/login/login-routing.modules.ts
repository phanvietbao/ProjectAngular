
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from '../admin/admin.component';
import { StaffComponent } from '../staff/staff.component';
import { UserloginComponent } from '../userlogin/userlogin.component';



const routes: Routes = [
  { path: 'admin', component:  AdminComponent},
  {path:'userlogin',component:UserloginComponent},
  {path:'staff',component:StaffComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
