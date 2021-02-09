import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualInspirationComponent } from './visual-inspiration.component';

describe('VisualInspirationComponent', () => {
  let component: VisualInspirationComponent;
  let fixture: ComponentFixture<VisualInspirationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualInspirationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualInspirationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
