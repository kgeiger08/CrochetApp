import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YarnDetailComponent } from './yarn-detail.component';

describe('YarnDetailComponent', () => {
  let component: YarnDetailComponent;
  let fixture: ComponentFixture<YarnDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YarnDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YarnDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
