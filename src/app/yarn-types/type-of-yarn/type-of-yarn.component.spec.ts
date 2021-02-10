import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeOfYarnComponent } from './type-of-yarn.component';

describe('TypeOfYarnComponent', () => {
  let component: TypeOfYarnComponent;
  let fixture: ComponentFixture<TypeOfYarnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeOfYarnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeOfYarnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
