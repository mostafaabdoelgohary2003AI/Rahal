import { Component ,OnInit ,HostListener} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet,Router,NavigationEnd } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutEgyptComponent } from './components/about-egypt/about-egypt.component';
import { BookingComponent } from './components/booking/booking.component';
import { ToursComponent } from './components/tours/tours.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { TourDetailsComponent } from './components/tours/tour-details/tour-details.component';
import { BlogComponent } from './components/blog/blog.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
declare var ScrollReveal: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule,CommonModule,HeaderComponent,HomeComponent,ContactComponent,AboutComponent,AboutEgyptComponent,BookingComponent,ToursComponent,FooterComponent,TourDetailsComponent,BlogComponent,SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  titel = 'Rahal';

  //icon to scroll top
  isShow: boolean = false;
  topPosToStartShowing = 300;

  @HostListener('window:scroll')
  checkScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    this.isShow = scrollPosition >= this.topPosToStartShowing;
  }

  goToTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
  /////////////////////////////////////////////////////////////////////////

  ////ScrollReveal/////
  constructor(private router: Router) {}

  ngOnInit() {

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {

        this.applyScrollReveal();
      }
    });
  }

  applyScrollReveal() {
    ScrollReveal().reveal('.scrollbutton', {
      duration: 1500,
      origin: 'bottom',
      distance: '50px',
    });
    ScrollReveal().reveal('.scrollright', {
      duration: 1500,
      origin: 'right',
      distance: '50px',
    });
    ScrollReveal().reveal('.scrollleft', {
      duration: 1500,
      origin: 'left',
      distance: '50px',
    });
    ScrollReveal().reveal('.scroll-with-rotation', {
      duration: 1500,
      rotate: { x:0, y: 80, z: 0 },
      distance: '50px'
    });
  }
}
//////////////////////////////////////////////////////////
