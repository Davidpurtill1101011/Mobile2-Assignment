import { Component, OnInit } from '@angular/core';
import { BusinessService } from '../Services/business.service';
@Component({
  selector: 'app-business-news',
  templateUrl: './business-news.page.html',
  styleUrls: ['./business-news.page.scss'],
})
export class BusinessNewsPage implements OnInit {
  businessData:any=[];
  constructor(private business:BusinessService) { }

  ngOnInit() {
    this.business.getBusinessNews().subscribe(
      (data)=>{
        // getting the data from the JSON to send it to the html page.
        this.businessData = data.articles;
      }
    );
  }

}
