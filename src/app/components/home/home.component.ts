import { CUSTOM_ELEMENTS_SCHEMA ,Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DiscoverService } from './discover.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})

export class HomeComponent{


  modalData: any = {};
  discoverData:any[]=[];
  discoverData1:any[]=[];
  discoverData2:any[]=[];
  constructor(private discoverService:DiscoverService)
    {
    this.discoverData = this.discoverService.getDiscovers();
    this.discoverData1 = this.discoverService.getDiscoversExplore();
    this.discoverData2 = this.discoverService.getDiscoversExplore1();

  }

  setModalData(cardData: any) {
    console.log(cardData)
    this.modalData = cardData;
  }
}

