import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReturnStatement } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private home:HttpClient) { }
  // getting all the apis to the home service and then sending,
  // it to the homepage.ts to read them in on the home.html
  getTechHeadlines():Observable<any>{
    return this.home.get('http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=538d64ffe9f540ae86a47eae6509f215');
  }
  getBitcoinHeadlines():Observable<any>{
    return this.home.get('http://newsapi.org/v2/everything?q=bitcoin&from=2020-03-24&sortBy=publishedAt&apiKey=8399ea46a5e14943aab355c9cafa28b5');
  }
  getBusinessHeadlines():Observable<any>{
    return this.home.get('http://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=538d64ffe9f540ae86a47eae6509f215');
  }
  getStockHeadlines():Observable<any>{
    return this.home.get('http://newsapi.org/v2/top-headlines?country=ie&category=science&apiKey=538d64ffe9f540ae86a47eae6509f215');
  }

}
