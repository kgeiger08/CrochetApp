import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StitchDetailComponent } from './stitch-detail.component';

describe('StitchDetailComponent', () => {
  let component: StitchDetailComponent;
  let fixture: ComponentFixture<StitchDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StitchDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StitchDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
