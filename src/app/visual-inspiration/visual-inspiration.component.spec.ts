import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FetchImageService } from './fetchImage.service';

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

  // it('should contain Welcome to Visual Inspiration! in an h2 tag', () => {
  //   const fixture = TestBed.createComponent(VisualInspirationComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h2').textContent).toContain('Welcome to Visual Inspiration!');
  // });

});
