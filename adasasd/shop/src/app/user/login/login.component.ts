
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { User } from '../user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent{
username: string |any;
  password: string |any;
  role : any;
  users :any[] =[];
  constructor(private userService: UserService, private router: Router,private httpClient: HttpClient) {}

  ngOnInit(){

  }
  onSubmit(): void {
    if (this.userService.login(this.username, this.password)) {
      // Nếu đăng nhập thành công, chuyển hướng đến trang tương ứng với vai trò của người dùng
      if (this.userService.isAdmin()) {
        this.router.navigate(['/admin']);
           } else if (this.userService.isEmployee()) {
        this.router.navigate(['/staff']);
      } else {
        this.router.navigate(['/']);
      }
    } else {
      // Nếu đăng nhập thất bại, hiển thị thông báo lỗi
      alert('Sai tài khoản hoặc mật khẩu');
    }
  }
  }

  // onSubmit() {
  //   this.userService.login(this.username, this.password).subscribe(
  //     (response) => {
  //       console.log('Login successful:', response);
  //       // Lưu thông tin đăng nhập vào localStorage hoặc sessionStorage
  //     },
  //     (error) => {
  //       console.log('Login failed:', error);
  //       // Hiển thị thông báo lỗi đăng nhập
  //     }
  //   );
  // }

