import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BitcoinService {
  constructor(private bitcn:HttpClient) { }
  // getting the api for the bitcoin news
  getBitcoinNews():Observable<any>{
    return this.bitcn.get('http://newsapi.org/v2/everything?q=bitcoin&from=2020-03-24&sortBy=publishedAt&apiKey=8399ea46a5e14943aab355c9cafa28b5');
  }
}
