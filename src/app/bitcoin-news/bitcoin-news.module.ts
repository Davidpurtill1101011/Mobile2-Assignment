import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BitcoinNewsPageRoutingModule } from './bitcoin-news-routing.module';

import { BitcoinNewsPage } from './bitcoin-news.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BitcoinNewsPageRoutingModule
  ],
  declarations: [BitcoinNewsPage]
})
export class BitcoinNewsPageModule {}
