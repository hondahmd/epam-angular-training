import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCourseTitleComponent } from './add-course-title.component';

describe('AddCourseTitleComponent', () => {
  let component: AddCourseTitleComponent;
  let fixture: ComponentFixture<AddCourseTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCourseTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCourseTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
