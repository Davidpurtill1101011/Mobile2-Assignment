import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StockMarketNewsPage } from './stock-market-news.page';

describe('StockMarketNewsPage', () => {
  let component: StockMarketNewsPage;
  let fixture: ComponentFixture<StockMarketNewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockMarketNewsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StockMarketNewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
