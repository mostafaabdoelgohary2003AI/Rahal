import { CommonModule } from '@angular/common';
import { Component  } from '@angular/core';
import { LogService } from './log.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private logservice: LogService, private router: Router) {}

  // تسجيل الدخول
  login() {
    if (this.logservice.login(this.username, this.password)) {
      this.router.navigate(['/blog']);
    } else {
      this.errorMessage = 'Invalid username or password';
    }
  }
}
