import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewLecComponent } from './add-new-lec.component';

describe('AddNewLecComponent', () => {
  let component: AddNewLecComponent;
  let fixture: ComponentFixture<AddNewLecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewLecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewLecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
