import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrindComponent } from './grind.component';

describe('GrindComponent', () => {
  let component: GrindComponent;
  let fixture: ComponentFixture<GrindComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GrindComponent]
    });
    fixture = TestBed.createComponent(GrindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
