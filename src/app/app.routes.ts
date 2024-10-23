
import { RouterModule, Routes, Scroll } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { BookingComponent } from './components/booking/booking.component';
import { ToursComponent } from './components/tours/tours.component';
import { AboutEgyptComponent } from './components/about-egypt/about-egypt.component';
import { AboutComponent } from './components/about/about.component';
import { TourDetailsComponent } from './components/tours/tour-details/tour-details.component';
import { BlogComponent } from './components/blog/blog.component';
import { AllPlogComponent } from './components/all-plog/all-plog.component';
import { LogService } from './components/login/log.service';
import { LoginComponent } from './components/login/login.component';




export const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"contact", component:ContactComponent},
  {path:"booking", component:BookingComponent},
  {
    path:"tours",
    children:[
      {
        path:'',
        component:ToursComponent
      },
      {
        path:':id',
        component:TourDetailsComponent
      }
    ]
  }

  ,
  {path:"aboutegy", component:AboutEgyptComponent},
  {path:"blog",component:BlogComponent ,canActivate:[LogService]},
  {path:"allblog",component:AllPlogComponent},
  {path:"login",component:LoginComponent},

];

