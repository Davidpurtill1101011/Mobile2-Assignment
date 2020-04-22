import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  constructor(private bus:HttpClient) { }
  getBusinessNews():Observable<any>{
    return this.bus.get('http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=051be681cb68446c9be30fdc723d4148');
  }
}
