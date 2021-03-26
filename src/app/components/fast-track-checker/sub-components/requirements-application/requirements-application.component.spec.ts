/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RequirementsApplicationComponent } from './requirements-application.component';

describe('RequirementsApplicationComponent', () => {
  let component: RequirementsApplicationComponent;
  let fixture: ComponentFixture<RequirementsApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequirementsApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequirementsApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
