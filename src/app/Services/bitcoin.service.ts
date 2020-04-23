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
    return this.bitcn.get('http://newsapi.org/v2/everything?q=bitcoin&from=2020-03-23&sortBy=publishedAt&apiKey=538d64ffe9f540ae86a47eae6509f215');
  }
}
