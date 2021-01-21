import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StitchCounterComponent } from './stitch-counter.component';

describe('StitchCounterComponent', () => {
  let component: StitchCounterComponent;
  let fixture: ComponentFixture<StitchCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StitchCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StitchCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
