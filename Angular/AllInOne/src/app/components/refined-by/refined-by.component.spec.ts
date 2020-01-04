import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefinedByComponent } from './refined-by.component';

describe('RefinedByComponent', () => {
  let component: RefinedByComponent;
  let fixture: ComponentFixture<RefinedByComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefinedByComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefinedByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
