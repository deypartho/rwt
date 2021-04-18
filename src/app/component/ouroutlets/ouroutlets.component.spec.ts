import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OuroutletsComponent } from './ouroutlets.component';

describe('OuroutletsComponent', () => {
  let component: OuroutletsComponent;
  let fixture: ComponentFixture<OuroutletsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OuroutletsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OuroutletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
