import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string |any;
  password: string |any;
  email: string |any;
  confirmpassword: any;
  phone: any;
  address: any;
  gender: any;

  constructor(private userService: UserService) {}



  onSubmit() {
    this.userService.register(this.username, this.password,this.confirmpassword,this.email,this.phone,this.address,this.gender).subscribe(
      (response) => {
        console.log('Login successful:', response);
        // Lưu thông tin đăng nhập vào localStorage hoặc sessionStorage
      },
      (error) => {
        console.log('Login failed:', error);
        // Hiển thị thông báo lỗi đăng nhập
      }
    );
}

}
