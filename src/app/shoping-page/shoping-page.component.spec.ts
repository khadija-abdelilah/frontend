import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopingPageComponent } from './shoping-page.component';

describe('ShopingPageComponent', () => {
  let component: ShopingPageComponent;
  let fixture: ComponentFixture<ShopingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopingPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShopingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
