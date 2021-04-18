import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InhouseeventsComponent } from './inhouseevents.component';

describe('InhouseeventsComponent', () => {
  let component: InhouseeventsComponent;
  let fixture: ComponentFixture<InhouseeventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InhouseeventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InhouseeventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
