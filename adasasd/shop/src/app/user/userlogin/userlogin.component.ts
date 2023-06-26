import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent  implements OnInit{
  constructor(private userService: UserService){}

  ngOnInit(): void {
  }

  onLogout(): void {
    // Đăng xuất và chuyển hướng về trang đăng nhập
    this.userService.logout();
    window.location.href = 'home';
  }
}

