import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesListItemComponent } from './courses-list-item.component';
import { CourseListItem } from '../courses-list/courses-list-item-model';

describe('CoursesListItemComponent', () => {
  let component: CoursesListItemComponent;
  let fixture: ComponentFixture<CoursesListItemComponent>;
  const item: CourseListItem = {
    id: 'test',
    title: 'test',
    creationDate: '1-1',
    duration: '10',
    description: 'test',
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoursesListItemComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesListItemComponent);
    component = fixture.componentInstance;
    component.item = item;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
