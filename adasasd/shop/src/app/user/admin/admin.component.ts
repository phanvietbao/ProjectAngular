import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  constructor(private userService: UserService){}
  onLogout(): void {
    // Đăng xuất và chuyển hướng về trang đăng nhập
    this.userService.logout();
    window.location.href = "/";
  }
}
