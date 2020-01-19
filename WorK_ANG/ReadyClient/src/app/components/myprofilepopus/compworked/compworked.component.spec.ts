import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompworkedComponent } from './compworked.component';

describe('CompworkedComponent', () => {
  let component: CompworkedComponent;
  let fixture: ComponentFixture<CompworkedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompworkedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompworkedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
