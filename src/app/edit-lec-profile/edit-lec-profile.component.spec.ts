import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLecProfileComponent } from './edit-lec-profile.component';

describe('EditLecProfileComponent', () => {
  let component: EditLecProfileComponent;
  let fixture: ComponentFixture<EditLecProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditLecProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLecProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
