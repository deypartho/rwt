import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HomebannerComponent } from './homebanner.component';

describe('HomebannerComponent', () => {
  let component: HomebannerComponent;
  let fixture: ComponentFixture<HomebannerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomebannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomebannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
