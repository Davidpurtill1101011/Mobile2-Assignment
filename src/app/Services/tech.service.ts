import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TechService {

  constructor(private tech: HttpClient) { }
// getting tech-crunch api
  getTechNews():Observable<any>{
    return this.tech.get('http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=538d64ffe9f540ae86a47eae6509f215');
  }
}
