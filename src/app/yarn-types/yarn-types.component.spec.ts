import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YarnTypesComponent } from './yarn-types.component';

describe('YarnTypesComponent', () => {
  let component: YarnTypesComponent;
  let fixture: ComponentFixture<YarnTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YarnTypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YarnTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
