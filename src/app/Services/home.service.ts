import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReturnStatement } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private home:HttpClient) { }

  getTechHeadlines():Observable<any>{
    return this.home.get('http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=051be681cb68446c9be30fdc723d4148');
    
  }
  getBitcoinHeadlines():Observable<any>{
    return this.home.get('http://newsapi.org/v2/everything?q=bitcoin&from=2020-03-22&sortBy=publishedAt&apiKey=051be681cb68446c9be30fdc723d4148');
  }
  getBusinessHeadlines():Observable<any>{
    return this.home.get('http://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=051be681cb68446c9be30fdc723d4148');
  }
  getStockHeadlines():Observable<any>{
    return this.home.get('http://newsapi.org/v2/top-headlines?country=ie&category=science&apiKey=051be681cb68446c9be30fdc723d4148');
  }

}
