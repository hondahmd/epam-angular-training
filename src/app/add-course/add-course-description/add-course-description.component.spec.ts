import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCourseDescriptionComponent } from './add-course-description.component';

describe('AddCourseDescriptionComponent', () => {
  let component: AddCourseDescriptionComponent;
  let fixture: ComponentFixture<AddCourseDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCourseDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCourseDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
