import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigFiveQuickTestComponent } from './big-five-quick-test.component';

describe('BigFiveQuickTestComponent', () => {
  let component: BigFiveQuickTestComponent;
  let fixture: ComponentFixture<BigFiveQuickTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigFiveQuickTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigFiveQuickTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
