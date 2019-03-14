import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Observable } from 'rxjs';
import axios from "axios";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  ids: string;

  constructor(private router: Router) { }

  ngOnInit() {
    var parent = this;
    axios.get("http://www.mocky.io/v2/5c89b9c62b00005300dbdb87").then(function(response) {
      console.log(JSON.stringify(response.data));
      parent.ids = response.data;
    }).catch(function(error) {
      console.log(error);
    });
  }

  openTracking(id: any): void{
    console.log(id);
    let navigationExtras: NavigationExtras = {
      queryParams: {
          "id": JSON.stringify(id)
      }
    };
    this.router.navigate(['track'], navigationExtras);
  }

}
