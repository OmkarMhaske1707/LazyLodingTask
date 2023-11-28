import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 { path: 'hotel', loadChildren: () => import('./hotel/hotel.module').then(m => m.HotelModule) },
 { path: 'flight', loadChildren: () => import('./flight/flight.module').then(m => m.FlightModule) },
 { path: 'buses', loadChildren: () => import('./buses/buses.module').then(m => m.BusesModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
