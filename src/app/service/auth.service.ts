import { EventEmitter, Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { User, login, signUp } from '../data-type';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  invalidUserAuth= new EventEmitter<boolean>(false)
 constructor(private http: HttpClient, private router:Router){}
  userSignUp(user:signUp){
   this.http.post('http://localhost:3000/users',user,{observe:'response'})
   .subscribe((result)=>{
    if(result){
      localStorage.setItem('user',JSON.stringify(result.body));
      this.router.navigate(['/']);
    }
   })}

   userLogin(data:login){
    this.http.get<signUp[]>(`http://localhost:9000/api/users/login`,
    {observe:'response'}
    ).subscribe((result)=>{
      if(result && result.body?.length){
        localStorage.setItem('user',JSON.stringify(result.body[0]));
        this.router.navigate(['/']);
        this.invalidUserAuth.emit(false)
      }else{
        this.invalidUserAuth.emit(true)
      }
    })
  }


  private loggedIn = false;
  private loggedInUser : any= null;
  private apiUrl = 'http://localhost:9000/api';
  private user: User| any;


  register(username: string, email: string, full_name: string, phone: string, address: string, gender: string, birthday: string, password: string, password_confirmation: string): Observable<any> {
    const url = `${this.apiUrl}/users/register`;
    const body = { username, email, full_name, phone, address, gender, birthday, password, password_confirmation };
    return this.http.post(url, body);
  }


  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { username, password });
  }

  // login1(username: string, password: string): Observable<any> {
  //   const url = `${this.apiUrl}/users/login`;
  //   const body = { username, password };
  //   return this.http.post(url, body);
  // }
  // login2(username: string, password: string): Observable<string> {
  //   return this.http.get<User[]>('http://localhost:3000/users').pipe(
  //     map((users: User[]) => {
  //       const user = users.find(
  //         (u) => u.username === username && u.password === password
  //       );
  //       if (user) {
  //         return user.role;
  //       } else {
  //         throw new Error('Invalid credentials');
  //       }
  //     })
  //   );
  // }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }
  login2(username: string, password: string): boolean {
    // Gọi API để đăng nhập và nhận về thông tin người dùng, ví dụ:
    const user = this.mockApiLogin(username, password);

    // Nếu đăng nhập thành công, lưu thông tin người dùng vào biến loggedInUser
    if (user) {
      this.loggedInUser = user;
      return true;
    }

    return false;
  }
  private mockApiLogin(username: string, password: string): any {

    const users = [
      { id: 1, username: 'admin', password: 'admin', role: 'admin' },
      { id: 2, username: 'staff', password: 'staff', role: 'staff' },
      { id: 3, username: 'user', password: 'user', role: 'user' },
    ];

    const user = users.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      return { id: user.id, username: user.username, role: user.role };
    }
    return null;
  }
  logout(): void {
    // Xóa thông tin người dùng khi đăng xuất
    this.loggedInUser = null;
  }
  isAdmin(): boolean {
    // Kiểm tra xem người dùng có phải là admin hay không
    return this.loggedInUser && this.loggedInUser.role === 'admin';
  }

  isEmployee(): boolean {
    // Kiểm tra xem người dùng có phải là nhân viên hay không
    return this.loggedInUser && this.loggedInUser.role === 'staff';
  }

  isUser(): boolean {
    // Kiểm tra xem người dùng có phải là người dùng hay không
    return this.loggedInUser && this.loggedInUser.role === 'user';
  }
  userAuthReload(){
    if(localStorage.getItem('user')){
      this.router.navigate(['/']);
    }
  }


}
