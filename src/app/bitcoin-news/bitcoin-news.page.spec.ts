import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BitcoinNewsPage } from './bitcoin-news.page';

describe('BitcoinNewsPage', () => {
  let component: BitcoinNewsPage;
  let fixture: ComponentFixture<BitcoinNewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BitcoinNewsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BitcoinNewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
