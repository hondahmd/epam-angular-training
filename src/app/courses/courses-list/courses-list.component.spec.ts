import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesListComponent } from './courses-list.component';
import { CourseListItem } from './courses-list-item-model';
import { CoursesService } from '../courses.service';

class MockCoursesService {
  getItems(): CourseListItem[] {
    return [
      {
        id: 'test',
        title: 'test',
        creationDate: '1-1',
        duration: '10',
        description: 'test',
      }
    ];
  }
}

describe('CoursesListComponent', () => {
  let component: CoursesListComponent;
  let fixture: ComponentFixture<CoursesListComponent>;
  let coursesServer: MockCoursesService;
  let comp;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        CoursesListComponent,
        { provide: CoursesService, useClass: MockCoursesService }
      ],
      declarations: [CoursesListComponent]
    })
      .compileComponents();
    comp = TestBed.inject(CoursesListComponent);
    coursesServer = TestBed.inject(CoursesService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should not have items after construction', () => {
    expect(comp.courseItems.length).toBe(0);
  })

  it('should have one item after ngOnInit', () => {
    comp.ngOnInit();
    expect(comp.courseItems.length).toBe(1);

    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('courses-courses-list-item')).toBeTruthy();
  })
});
