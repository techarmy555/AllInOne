import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunitesComponent } from './communites.component';

describe('CommunitesComponent', () => {
  let component: CommunitesComponent;
  let fixture: ComponentFixture<CommunitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
