import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent  implements OnInit {
  constructor(private authService: UserService) { }
  ngOnInit(): void {
  }

  onLogout(): void {
    // Đăng xuất và chuyển hướng về trang đăng nhập
    this.authService.logout();
    window.location.href = '/';
  }
}
