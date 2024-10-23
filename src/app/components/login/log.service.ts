import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor(private router: Router) { }

  // تسجيل الدخول
  login(username: string, password: string): boolean {
    // هنا يمكنك وضع شروط التحقق من اسم المستخدم وكلمة المرور
    if (username === 'Eslam' && password === '12345' ||username === 'Mariam' && password === '12345' ) {
      localStorage.setItem('loggedIn', 'true');
      localStorage.setItem('username', username);
      return true;
    }
    return false;
  }

  // تسجيل الخروج
  logout() {
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('username');
    this.router.navigate(['/login']);
  }

  // التحقق من حالة تسجيل الدخول
  isLoggedIn(): boolean {
    return localStorage.getItem('loggedIn') === 'true';
  }

  // إرجاع اسم المستخدم المسجل الدخول
  getUsername(): string | null {
    return localStorage.getItem('username');
  }
   // حماية الصفحات
   canActivate(): boolean {
    if (this.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}


