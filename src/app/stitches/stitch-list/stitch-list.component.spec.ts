import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StitchListComponent } from './stitch-list.component';

describe('StitchListComponent', () => {
  let component: StitchListComponent;
  let fixture: ComponentFixture<StitchListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StitchListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StitchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
