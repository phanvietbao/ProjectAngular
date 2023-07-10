import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // email: string = '';
  // password: string = '';

  // constructor(private http: HttpClient) {}

  // login(): Observable<any> {
  //   const url = '';
  //   const body = {
  //     email: this.email,
  //     password: this.password
  //   };
  //   return this.http.post(url, body);
  // }

  username: string |any;
  password: string |any;
  role : any;
  users :any[] =[];
  constructor(private userService: AuthService, private router: Router,private httpClient: HttpClient) {}

  ngOnInit(){

  }
  onSubmit(): void {
    if (this.userService.login(this.username, this.password)) {

      if (this.userService.isAdmin()) {
        this.router.navigate(['/admin']);
           } else if (this.userService.isEmployee()) {
        this.router.navigate(['/staff']);
      } else {
        this.router.navigate(['/userlogin']);
      }
    } else {

      alert('Sai tài khoản hoặc mật khẩu');
    }
  }




}
