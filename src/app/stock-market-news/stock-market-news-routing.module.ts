import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StockMarketNewsPage } from './stock-market-news.page';

const routes: Routes = [
  {
    path: '',
    component: StockMarketNewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StockMarketNewsPageRoutingModule {}
