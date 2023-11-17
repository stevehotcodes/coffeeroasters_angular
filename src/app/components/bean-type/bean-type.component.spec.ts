import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeanTypeComponent } from './bean-type.component';

describe('BeanTypeComponent', () => {
  let component: BeanTypeComponent;
  let fixture: ComponentFixture<BeanTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeanTypeComponent]
    });
    fixture = TestBed.createComponent(BeanTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
