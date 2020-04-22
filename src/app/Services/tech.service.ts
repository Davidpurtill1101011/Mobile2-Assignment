import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TechService {

  constructor(private tech: HttpClient) { }

  getTechNews():Observable<any>{
    return this.tech.get('http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=051be681cb68446c9be30fdc723d4148');
  }
}
