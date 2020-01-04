import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpLangComponent } from './sp-lang.component';

describe('SpLangComponent', () => {
  let component: SpLangComponent;
  let fixture: ComponentFixture<SpLangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpLangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpLangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
