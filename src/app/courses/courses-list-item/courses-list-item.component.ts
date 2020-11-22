import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CourseListItem } from '../courses-list/courses-list-item-model';

@Component({
  selector: 'courses-courses-list-item',
  templateUrl: './courses-list-item.component.html',
  styleUrls: ['./courses-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesListItemComponent implements OnInit {
  @Input() item: CourseListItem;

  @Output() deleteCourseEvent = new EventEmitter<string>();

  containerClass: {};

  stared: boolean;

  constructor() { }

  ngOnInit(): void {
    this.setContainerClass();
    this.setStaredStatus();
  }

  handleDeleteCourse(): void {
    this.deleteCourseEvent.emit(this.item.id);
  }

  setContainerClass() {
    this.containerClass = {
      'stared-background': this.item.stared,
    }
  }

  setStaredStatus() {
    this.stared = this.item.stared;
  }
}
