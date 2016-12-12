/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InspektoratComponent } from './inspektorat.component';

describe('InspektoratComponent', () => {
  let component: InspektoratComponent;
  let fixture: ComponentFixture<InspektoratComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InspektoratComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InspektoratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
