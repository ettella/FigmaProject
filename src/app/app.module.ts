import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BookingComponent } from './booking/booking.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { ButtonsComponent } from './UI-tools/buttons/buttons.component';
import { IconsComponent } from './UI-tools/icons/icons.component';
import { InputComponent } from './UI-tools/input/input.component';
import { AlertComponent } from './UI-tools/alert/alert.component';
import { BookingListComponent } from './booking/booking-list/booking-list.component';
import { BookingItemComponent } from './booking/booking-list/booking-item/booking-item.component';
import { BookingDetailComponent } from './booking/booking-detail/booking-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BookingComponent,
    ButtonsComponent,
    IconsComponent,
    InputComponent,
    AlertComponent,
    BookingListComponent,
    BookingItemComponent,
    BookingDetailComponent,
  ],
 
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
