import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private stock:HttpClient) { }
// getting the news api for science in ireland
  getStockNews():Observable<any>{
    return this.stock.get('http://newsapi.org/v2/top-headlines?country=ie&category=science&apiKey=538d64ffe9f540ae86a47eae6509f215');

  }
}
