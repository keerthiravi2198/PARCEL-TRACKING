import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { orderdetails } from '../models/order.model';

@Component({
  selector: 'app-ordersummary',
  templateUrl: './ordersummary.component.html',
  styleUrls: ['./ordersummary.component.css']
})

export class OrdersummaryComponent implements OnInit {

  public globalResponse:any; 
  public details:orderdetails[];
  public apiURL:string;

  constructor( private httpClient:HttpClient){}

  ngOnInit() {
    this.getSummary()
    .subscribe((result)=> {
      this.globalResponse=result;
      console.log(this.globalResponse)
    },
    error =>{
      console.log(error.message);
    },
    () => {
      this.details=this.globalResponse;
      console.log(this.details)
    }
    )
  }

  getSummary()
  {
    let self=this;
    self.apiURL="http://localhost:8080//getprofiles";
    return this.httpClient.get(this.apiURL)
    .pipe(
      map(res=>res),
      catchError(this.errorHandler)

    );
  }

  errorHandler(error: Response)
  {
    console.log(error);
    return throwError(error);
  }
  
}