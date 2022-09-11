import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingDetailComponent } from './booking/booking-detail/booking-detail.component';
import { BookingListComponent } from './booking/booking-list/booking-list.component';
import { BookingComponent } from './booking/booking.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', redirectTo: '/booking', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  { path: 'booking', 
    component: BookingComponent,
  children:[
    {path:'', component:BookingDetailComponent},
    {path:'list', component:BookingListComponent}]}
]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
