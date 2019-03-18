import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterParcelComponent } from './register-parcel/register-parcel.component';
import { LoginComponent } from './login/login.component';
<<<<<<< HEAD
import { OrdersummaryComponent } from './ordersummary/ordersummary.component';

const routes: Routes = [
  { path: 'register-parcel', component: RegisterParcelComponent },
  { path: 'login', component: LoginComponent },
  {path: 'ordersummary' , component: OrdersummaryComponent},
=======
import { TrackComponent } from './track/track.component';
import { DashboardComponent } from './dashboard/dashboard.component';
 
const routes: Routes = [
  { path: 'register-parcel', component: RegisterParcelComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'track', component: TrackComponent },
>>>>>>> b118bea7b807490b1a40f69d5eaf59959b34cfd5
  { path: '', component: LoginComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
