import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import axios from "axios";

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }
}
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private router: Router) { }
  name:string;

  source_address:string;
  source_city:string;
  destination_address:string;
  destination_city:string;
  phone_number: string;
  weight: number;
  url: string;



  ngOnInit() {
  }

  register = () => {
    console.log("1");
    if((this.name.length==0||this.source_address.length==0||this.source_city.length==0||this.destination_address.length==0||this.destination_city.length==0||
      this.phone_number.length==0||this.weight.toString.length==0))
      {
        alert("missing!!");
      }
      axios({
        method:'post',
        url:'http://localhost:8080/registerparcel',
        data: {
          name : this.name,
          source_address : this.source_address,
          source_city :this.source_city,
          destination_address:this.destination_address,
          destination_city:this.destination_city,
          phone_number:this.phone_number,
          weight:this.weight
        }
      }).then(res => {
        console.log(res.data);
        var jsonString = JSON.stringify(res.data);
        jsonString = jsonString.replace(/[{}]/g,'');
        console.log(jsonString);
        alert(jsonString);
      });
        
      }
    }

  



