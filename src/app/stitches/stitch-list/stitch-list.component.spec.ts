import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StitchService } from '../stitch.service';

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

  // it("should use the stitchesArray from the service", () => {
  //   const stitchService = fixture.debugElement.injector.get(StitchService);
  //   fixture.detectChanges();
  //   expect(stitchService.displayStitches()).toEqual(component.stitchesArray);
  // });

});
