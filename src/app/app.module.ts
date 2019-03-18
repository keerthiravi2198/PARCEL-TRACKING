import { BrowserModule } from '@angular/platform-browser';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CustomMaterialModule } from './core/material.module';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterParcelComponent } from './register-parcel/register-parcel.component';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';
<<<<<<< HEAD
import { OrdersummaryComponent } from './ordersummary/ordersummary.component';

=======
import { DashboardComponent } from './dashboard/dashboard.component';
import { TrackComponent } from './track/track.component';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database'
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { MatButtonModule } from '@angular/material';
>>>>>>> b118bea7b807490b1a40f69d5eaf59959b34cfd5

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterParcelComponent,
<<<<<<< HEAD
    OrdersummaryComponent
       
=======
    DashboardComponent,
    TrackComponent    
>>>>>>> b118bea7b807490b1a40f69d5eaf59959b34cfd5
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCfenLsPRbxZ8Br9VohX5a0hhqBw-zoNFE',
    }),
    AgmDirectionModule,
  
    
  ],
  providers: [GoogleMapsAPIWrapper, AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
