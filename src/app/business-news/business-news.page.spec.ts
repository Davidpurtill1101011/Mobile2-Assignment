import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BusinessNewsPage } from './business-news.page';

describe('BusinessNewsPage', () => {
  let component: BusinessNewsPage;
  let fixture: ComponentFixture<BusinessNewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessNewsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BusinessNewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
