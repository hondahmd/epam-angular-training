import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CourseInterface } from '../../models/course-interface';

@Component({
  selector: 'courses-courses-list-item',
  templateUrl: './courses-list-item.component.html',
  styleUrls: ['./courses-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesListItemComponent implements OnInit {
  @Input() item: CourseInterface;

  @Output() deleteCourseEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  handleDeleteCourse(): void {
    this.deleteCourseEvent.emit(this.item.id);
  }
}
