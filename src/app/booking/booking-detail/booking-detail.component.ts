import { BookingData } from '../booking-data.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-booking-detail',
  templateUrl: './booking-detail.component.html',
  styleUrls: ['./booking-detail.component.css']
})
export class BookingDetailComponent implements OnInit {
  @Input()
  booking!: BookingData;
  @Output() nextPlaceSelected: EventEmitter<BookingData> = new EventEmitter<BookingData>()

  constructor() { }

  ngOnInit(): void {
  }

  onNextPlace(): any{
    this.nextPlaceSelected.emit(this.booking)
  }

}
