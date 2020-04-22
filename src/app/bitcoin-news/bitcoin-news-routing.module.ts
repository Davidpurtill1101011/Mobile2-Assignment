import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BitcoinNewsPage } from './bitcoin-news.page';

const routes: Routes = [
  {
    path: '',
    component: BitcoinNewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BitcoinNewsPageRoutingModule {}
