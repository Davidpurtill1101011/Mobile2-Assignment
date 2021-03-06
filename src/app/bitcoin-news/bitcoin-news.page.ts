import { Component, OnInit } from '@angular/core';
import { BitcoinService } from '../Services/bitcoin.service';
@Component({
  selector: 'app-bitcoin-news',
  templateUrl: './bitcoin-news.page.html',
  styleUrls: ['./bitcoin-news.page.scss'],
})
export class BitcoinNewsPage implements OnInit {
bitData:any=[];
  constructor(private bit:BitcoinService) { }

  ngOnInit() {
    this.bit.getBitcoinNews().subscribe(
      (data)=>{
        // getting the data from the JSON to send it to the html page.
        this.bitData = data.articles;
      }
    );

  }

}
