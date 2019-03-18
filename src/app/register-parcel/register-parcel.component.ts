/// <reference types="@types/googlemaps" />
import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import axios from "axios";


@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }
}

@Component({
  selector: 'app-user',
  templateUrl: './register-parcel.component.html',
  styleUrls: ['./register-parcel.component.css']
})

export class RegisterParcelComponent implements OnInit, OnChanges {

  constructor(private router: Router) { }
  @Input() name: string;
  source_address: string;
  total_distance: number;
  source_city: string;
  destination_address: string;
  destination_city: string;
  phone_number: string;
  weight: number;
  cost: number;
  cost_pretext: string;
  weight_posttext: string;
  distance_posttext: string;
  kilometer:number;

  url: string;

  ngOnInit() { 
   
  }

  ngOnChanges(changes: any) {
    console.log(changes.name.currentValue);
  }

  onWeightChange(searchValue : number ) {  
    this.cost = Math.floor((this.total_distance/100) * searchValue * 30);
    this.cost_pretext = "The Cost is Rs. ";
    this.weight_posttext = " KGs";
  }

  onDeliveryChange(searchValue : string ) {
    this.destination_city = searchValue;
    this.distance();
  }

  openDashboard(): void{
    this.router.navigate(["dashboard"]);
  }

  openRegister(): void{
    this.router.navigate(["register-parcel"]);
  }

  openLogin(): void{
    this.router.navigate(["login"]);
  }

  register = () => {
    if ((this.name.length == 0 || this.source_address.length == 0 || this.source_city.length == 0 || this.destination_address.length == 0 || this.destination_city.length == 0 ||
      this.phone_number.length == 0 || this.weight.toString.length == 0)) {
      alert("All fields must be filled.");
    }
    axios({
      method: 'post',
      url: 'http://localhost:8080/registerparcel',
      data: {
        name: this.name,
        source_address: this.source_address,
        source_city: this.source_city,
        destination_address: this.destination_address,
        destination_city: this.destination_city,
        phone_number: this.phone_number,
        weight: this.weight,
        kilometer: this.total_distance,
        amount : this.cost
      }
    }).then(res => {
      console.log(res.data);
      var jsonString = JSON.stringify(res.data);
      jsonString = jsonString.replace(/[{}]/g, '');
      console.log(jsonString);
     // alert(jsonString);
      this.router.navigate(["ordersummary"]);
    });
    

  }

  distance(): void {
    
    var directionsService = new google.maps.DirectionsService();

    var request = {
      origin      : this.source_address + ", " + this.source_city,
      destination : this.destination_address + ", " + this.destination_city,
      travelMode  : google.maps.TravelMode.DRIVING
    };

    var parent = this;

    directionsService.route(request, function(response, status) {
      parent.total_distance = ((response.routes[0].legs[0].distance.value)/1000);
      parent.distance_posttext = " KMs";
    });

  }

}





