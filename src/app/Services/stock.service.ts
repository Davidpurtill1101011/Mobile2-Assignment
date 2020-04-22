import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private stock:HttpClient) { }

  getStockNews():Observable<any>{
    return this.stock.get('http://newsapi.org/v2/everything?domains=wsj.com&apiKey=051be681cb68446c9be30fdc723d4148');

  }
}
