import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BitcoinService {
  constructor(private bitcn:HttpClient) { }
  
  getBitcoinNews():Observable<any>{
    return this.bitcn.get('http://newsapi.org/v2/everything?q=bitcoin&from=2020-03-22&sortBy=publishedAt&apiKey=051be681cb68446c9be30fdc723d4148');
  }
}
