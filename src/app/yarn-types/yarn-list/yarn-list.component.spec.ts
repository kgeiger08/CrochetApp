import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YarnListComponent } from './yarn-list.component';

describe('YarnListComponent', () => {
  let component: YarnListComponent;
  let fixture: ComponentFixture<YarnListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YarnListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YarnListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
