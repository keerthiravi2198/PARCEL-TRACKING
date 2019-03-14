import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterParcelComponent } from './register-parcel/register-parcel.component';
import { LoginComponent } from './login/login.component';
import { TrackComponent } from './track/track.component';
import { DashboardComponent } from './dashboard/dashboard.component';
 
const routes: Routes = [
  { path: 'register-parcel', component: RegisterParcelComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'track', component: TrackComponent },
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
