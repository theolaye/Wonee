import { Component, OnInit } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';



@Component({
  selector: 'app-appartement',
  templateUrl: './appartement.component.html',
  styleUrls: ['./appartement.component.scss']
})
export class AppartementComponent implements OnInit {
  images: any[];
  constructor() { }

  ngOnInit() {
    this.images = [];
    this.images.push({source:'assets/data_artisan.jpg', alt:'Description for Image 1', title:'Title 1'});
    this.images.push({source:'assets/baby-jesus.jpg', alt:'Description for Image 2', title:'Title 2'});
    this.images.push({source:'assets/DEWENETY.png', alt:'Description for Image 3', title:'Title 3'});
    this.images.push({source:'assets/(2).png', alt:'Description for Image 4', title:'Title 4'});
    this.images.push({source:'assets/drapeausenegal.jpg', alt:'Description for Image 5', title:'Title 5'});
  
  }

}
