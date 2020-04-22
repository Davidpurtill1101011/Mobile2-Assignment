import { Component, OnInit } from '@angular/core';
import { StockService } from '../Services/stock.service';
@Component({
  selector: 'app-stock-market-news',
  templateUrl: './stock-market-news.page.html',
  styleUrls: ['./stock-market-news.page.scss'],
})
export class StockMarketNewsPage implements OnInit {
  stockData:any=[];
  constructor(private stock:StockService) { }

  ngOnInit() {
    this.stock.getStockNews().subscribe(
      (data)=>{
        this.stockData = data.articles;
      }
    );
  }
  
}
