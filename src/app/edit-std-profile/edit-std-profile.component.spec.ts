import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStdProfileComponent } from './edit-std-profile.component';

describe('EditStdProfileComponent', () => {
  let component: EditStdProfileComponent;
  let fixture: ComponentFixture<EditStdProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditStdProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditStdProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
