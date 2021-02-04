import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyExamComponent } from './apply-exam.component';

describe('ApplyExamComponent', () => {
  let component: ApplyExamComponent;
  let fixture: ComponentFixture<ApplyExamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyExamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
