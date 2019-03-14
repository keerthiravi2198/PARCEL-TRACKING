/// <reference types="@types/googlemaps" />
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { loc } from '../loc.interface'

import axios from "axios";
@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})

export class TrackComponent implements OnInit{

  id: string;
  origin: string;
  destination: string;
  amount: string;
  scity: string;
  dcity: string;
  name: string;
  locations: loc[] = [];
  locations2: loc[] = [];

  getDirection() {
    this.origin = 'Coimbatore',
    this.destination = 'Chennai'
  }
    
  constructor(private db: AngularFireDatabase, private router: ActivatedRoute, private route: Router) {}

  distance(): void {
    
    var directionsService = new google.maps.DirectionsService();

    var request = {
      origin      : this.origin,
      destination : this.destination,
      travelMode  : google.maps.TravelMode.DRIVING
    };

    directionsService.route(request, function() {});

  }

  ngOnInit() {
    this.getDirection();
    
    this.router.queryParams.subscribe(params => {
      this.id = JSON.parse(params["id"]);
    });
    var parent = this;
    var url = "http://www.mocky.io/v2/5c89b9f52b00005800dbdb8c";
    // var url = "http://localhost:8080/trackiddetails?track_id="+this.id;
    axios.get(url).then(function(response) {
      console.log(JSON.stringify(response.data));
      parent.name = response.data.name;
      parent.amount = response.data.amount;
      parent.scity = response.data.source_city;
      parent.dcity = response.data.destination_city;
    }).catch(function(error) {
      console.log(error);
    });
    const nameRef = this.db.list("tracking/"+(this.id.toUpperCase())+"/track");
    nameRef.snapshotChanges(['child_added'])
    .subscribe(actions => {
      actions.forEach(action => {
        parent.name = action.payload.child("lat").val();
        parent.locations.push({
          lat: action.payload.child("lat").val(),
          long: action.payload.child("lon").val()
        });
      });
    });
    this.locations2 = this.locations;
  }

}
