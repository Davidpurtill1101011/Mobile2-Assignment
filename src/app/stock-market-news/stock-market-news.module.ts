import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StockMarketNewsPageRoutingModule } from './stock-market-news-routing.module';

import { StockMarketNewsPage } from './stock-market-news.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StockMarketNewsPageRoutingModule
  ],
  declarations: [StockMarketNewsPage]
})
export class StockMarketNewsPageModule {}
