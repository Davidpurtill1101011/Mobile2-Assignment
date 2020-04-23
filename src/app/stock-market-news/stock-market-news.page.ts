import { Component, OnInit } from '@angular/core';
import { StockService } from '../Services/stock.service';
@Component({
  selector: 'app-stock-market-news',
  templateUrl: './stock-market-news.page.html',
  styleUrls: ['./stock-market-news.page.scss'],
})
export class StockMarketNewsPage implements OnInit {
 scienceData:any=[];
  constructor(private science:StockService) { }

  ngOnInit() {
    this.science.getStockNews().subscribe(
      (data)=>{
        this.scienceData = data.articles;
      }
    );
  }
  
}
