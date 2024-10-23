import { Component } from '@angular/core';
import { TourService } from '../tour.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tour-details',
  standalone: true,
  imports: [],
  templateUrl: './tour-details.component.html',
  styleUrl: './tour-details.component.css'
})
export class TourDetailsComponent {
  tour:any;
  constructor(private route:ActivatedRoute,private tourService:TourService){
    const tourId = this.route.snapshot.paramMap.get('id');
     this.tour = this.tourService.getTour(Number(tourId))
     console.log(this.tour)
  }

}
