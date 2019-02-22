import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterParcelComponent } from './register-parcel/register-parcel.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'register-parcel', component: RegisterParcelComponent },
  { path: 'login', component: LoginComponent },
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
