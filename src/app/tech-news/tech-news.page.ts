import { Component, OnInit } from '@angular/core';
import { TechService } from '../Services/tech.service';
import { BitcoinService } from '../Services/bitcoin.service';
@Component({
  selector: 'app-tech-news',
  templateUrl: './tech-news.page.html',
  styleUrls: ['./tech-news.page.scss'],
})
export class TechNewsPage implements OnInit {
  techData: any = [];
  
  constructor(private tech: TechService) { }

  ngOnInit() {
    this.tech.getTechNews().subscribe(
      (data) => {
        this.techData = data.articles;
      }
    );

  }

}
