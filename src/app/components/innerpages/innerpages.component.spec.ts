import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerpagesComponent } from './innerpages.component';

describe('InnerpagesComponent', () => {
  let component: InnerpagesComponent;
  let fixture: ComponentFixture<InnerpagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InnerpagesComponent]
    });
    fixture = TestBed.createComponent(InnerpagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
