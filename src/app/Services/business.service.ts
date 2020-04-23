import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  constructor(private bus:HttpClient) { }
  // getting the api key to send the tech news form the USA
  getBusinessNews():Observable<any>{
    return this.bus.get('http://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=538d64ffe9f540ae86a47eae6509f215');
  }
}
