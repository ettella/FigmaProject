import { BookingData } from '../booking-data.model';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css'],
})
export class BookingListComponent implements OnInit {
  @Output() placeWasSelected = new EventEmitter<BookingData>();
  booking: BookingData[];

  constructor(private router: Router, private route: ActivatedRoute) {
    this.booking = [
      new BookingData(
        'Vien, Austria',
        '08.10-08.15.2023',
        'https://images.unsplash.com/photo-1548713740-2a50e43f0830?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
      ),
      new BookingData(
        'Vien, Austria',
        '08.10-08.15.2023',
        'https://images.unsplash.com/photo-1499241142330-28701ea87ff4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'
      ),
      new BookingData(
        'Vien, Austria',
        '08.10-08.15.2023',
        'https://images.unsplash.com/photo-1516550893923-42d28e5677af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80'
      ),
      new BookingData(
        'Vien, Austria',
        '08.10-08.15.2023',
        'https://images.unsplash.com/photo-1552240263-6be6a51d77e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
      ),
    ];
  }

  ngOnInit() {}

  onSelectToList() {
    this.router.navigate(['list'], {relativeTo: this.route});
  }

  onPlaceSelected(place: BookingData) {
    this.placeWasSelected.emit(place);
  }
}
