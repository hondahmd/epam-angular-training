import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCourseDurationComponent } from './add-course-duration.component';

describe('AddCourseDurationComponent', () => {
  let component: AddCourseDurationComponent;
  let fixture: ComponentFixture<AddCourseDurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCourseDurationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCourseDurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
