import { BookingData } from './booking-data.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  selectedPlace!: BookingData;
  bookingDetail!: BookingData[];
  
  constructor() { }

  ngOnInit() {
  }

  actualPlaceItem(){
    // let placeIndex = this.bookingDetail.indexOf(bookingplace);

    // for(placeIndex = 0; placeIndex <= 1; ++placeIndex) {
    //   return bookingplace
    //  }
    
  }

}