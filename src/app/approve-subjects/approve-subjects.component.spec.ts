import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveSubjectsComponent } from './approve-subjects.component';

describe('ApproveSubjectsComponent', () => {
  let component: ApproveSubjectsComponent;
  let fixture: ComponentFixture<ApproveSubjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveSubjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
