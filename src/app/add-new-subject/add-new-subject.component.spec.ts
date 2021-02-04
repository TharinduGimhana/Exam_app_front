import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewSubjectComponent } from './add-new-subject.component';

describe('AddNewSubjectComponent', () => {
  let component: AddNewSubjectComponent;
  let fixture: ComponentFixture<AddNewSubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewSubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
