import { Component } from '@angular/core';
import { LogService } from '../login/log.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor(
    private logservice:LogService ,private router:Router
  ){}

  logout() {
    this.logservice.logout();
    this.router.navigate(['/login']);
  }
}
