import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigFiveLayoutComponent } from './big-five-layout.component';

describe('BigFiveLayoutComponent', () => {
  let component: BigFiveLayoutComponent;
  let fixture: ComponentFixture<BigFiveLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigFiveLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigFiveLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
