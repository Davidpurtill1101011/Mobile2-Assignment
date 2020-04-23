import { Component, OnInit } from '@angular/core';
import { HomeService } from '../Services/home.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  // arrays to get all the data for the home page and for,
  // the headlines to be shown on homepage
  homeData: any = [];
  bit1Data: any = [];
  bus1Data: any = [];
  stk1Data: any = [];
  constructor(private tech1: HomeService, private bit1: HomeService, private bus1: HomeService, private stk1: HomeService) { }
  
  ngOnInit() {
    // all of these are used to get and send the data from each api and to be used as a headline on the home page
    this.tech1.getTechHeadlines().subscribe(
      (data) => {
        this.homeData = data.articles;
      }
    );

    this.bit1.getBitcoinHeadlines().subscribe(
      (data) => {
        this.bit1Data = data.articles;
      }
    );

    this.bus1.getBusinessHeadlines().subscribe(
      (data)=>{
        this.bus1Data = data.articles;
      }
    );

    this.stk1.getStockHeadlines().subscribe(
      (data)=>{
        this.stk1Data = data.articles;
      }
    );
  }

}
