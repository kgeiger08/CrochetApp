import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StitchTypeComponent } from './stitch-type.component';

describe('StitchTypeComponent', () => {
  let component: StitchTypeComponent;
  let fixture: ComponentFixture<StitchTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StitchTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StitchTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
