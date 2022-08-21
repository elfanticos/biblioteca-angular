import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesingPatternComponent } from './desing-pattern.component';

describe('DesingPatternComponent', () => {
  let component: DesingPatternComponent;
  let fixture: ComponentFixture<DesingPatternComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesingPatternComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesingPatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
