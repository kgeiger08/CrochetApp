import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StitchesComponent } from './stitches.component';

describe('StitchesComponent', () => {
  let component: StitchesComponent;
  let fixture: ComponentFixture<StitchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StitchesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StitchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
