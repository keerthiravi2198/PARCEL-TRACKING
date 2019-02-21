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
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) { }
  username: string;
  password: string;
  validornot: boolean;
  url: string;
  ngOnInit() {

    this.validornot = false;
  }

  login(): void {
    let self = this;
    this.url = "http://localhost:8080/check?username="+this.username+"&password="+this.password;
    axios.get(this.url).then(function(response) {
      console.log(response.data + '');
      if (response.data + '' == "true") {
        self.router.navigate(["city-distance"]);
      }
      else {
        window.alert("Wrong Credentials");
      }
    }).catch(function(error) {
      console.log(error);
    });
   // self.router.navigate(["city-distance"]);
  }
}
