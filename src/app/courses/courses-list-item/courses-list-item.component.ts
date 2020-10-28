import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CourseListItem} from '../courses-list/courses-list-item-model';

@Component({
  selector: 'courses-courses-list-item',
  templateUrl: './courses-list-item.component.html',
  styleUrls: ['./courses-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesListItemComponent implements OnInit {
  @Input() item: CourseListItem;

  @Output() deleteCourseEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  handleDeleteCourse() {
    this.deleteCourseEvent.emit(this.item.id);
  }
}
