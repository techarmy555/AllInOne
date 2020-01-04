import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntrHobbiesComponent } from './intr-hobbies.component';

describe('IntrHobbiesComponent', () => {
  let component: IntrHobbiesComponent;
  let fixture: ComponentFixture<IntrHobbiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntrHobbiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntrHobbiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
