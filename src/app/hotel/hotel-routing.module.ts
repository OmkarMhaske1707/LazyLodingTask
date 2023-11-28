import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelDetailComponent } from './hotel-detail/hotel-detail.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HotelComponent } from './hotel.component';

const routes: Routes = [
  { path: '', component: HotelComponent },
  {path:'hotel-detail',component:HotelDetailComponent},
  {path:'hotel-list',component:HotelListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelRoutingModule { }
