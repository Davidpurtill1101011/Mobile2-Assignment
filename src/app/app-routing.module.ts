import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'tech-news',
    loadChildren: () => import('./tech-news/tech-news.module').then( m => m.TechNewsPageModule)
  },
  {
    path: 'business-news',
    loadChildren: () => import('./business-news/business-news.module').then( m => m.BusinessNewsPageModule)
  },
  {
    path: 'bitcoin-news',
    loadChildren: () => import('./bitcoin-news/bitcoin-news.module').then( m => m.BitcoinNewsPageModule)
  },
  {
    path: 'stock-market-news',
    loadChildren: () => import('./stock-market-news/stock-market-news.module').then( m => m.StockMarketNewsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
