import { BookingData } from '../../booking-data.model';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-booking-item',
  templateUrl: './booking-item.component.html',
  styleUrls: ['./booking-item.component.css']
})
export class BookingItemComponent implements OnInit {

  @Input()
  booking!: BookingData;
  @Output() placeSelected = new EventEmitter<void>();
  @Input() index!: number;

  constructor() { }

  ngOnInit() {
  }

  onSelected() {
    this.placeSelected.emit();
  }

  onBook(){}

  

}
