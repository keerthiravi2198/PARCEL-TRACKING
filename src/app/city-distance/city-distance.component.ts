/// <reference types="@types/googlemaps" />
import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }
}

@Component({
  selector: 'app-city-distance',
  templateUrl: './city-distance.component.html',
  styleUrls: ['./city-distance.component.css']
})
export class CityDistanceComponent implements OnInit {

  constructor(private router: Router) { }
  origin: string;
  destination: string;
  distanceBetween: number;

  ngOnInit() {
  }

  distance(): void {
    
    var directionsService = new google.maps.DirectionsService();

    var request = {
      origin      : this.origin,
      destination : this.destination,
      travelMode  : google.maps.TravelMode.DRIVING
    };

    var parent = this;

    directionsService.route(request, function(response, status) {
      if ( status == google.maps.DirectionsStatus.OK ) {
        alert("The distance between " + parent.origin + " and " + parent.destination + " is " + (response.routes[0].legs[0].distance.value)/1000 + " KMs");
      }
      else {
        alert("Please enter the valid City to proceed.");
      }
    });
  }

}
