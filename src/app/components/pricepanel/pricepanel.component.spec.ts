import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricepanelComponent } from './pricepanel.component';

describe('PricepanelComponent', () => {
  let component: PricepanelComponent;
  let fixture: ComponentFixture<PricepanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricepanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricepanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
