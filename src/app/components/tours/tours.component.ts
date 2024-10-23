import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TourService } from './tour.service';

@Component({
  selector: 'app-tours',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './tours.component.html',
  styleUrl: './tours.component.css'
})
export class ToursComponent {
  tours:any[]=[];
  constructor(private tourService:TourService){
    this.tours = this.tourService.getTours()
  }

}
