import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CourseListItem } from '../courses-list/courses-list-item-model';

@Component({
  selector: 'courses-courses-list-item',
  templateUrl: './courses-list-item.component.html',
  styleUrls: ['./courses-list-item.component.scss']
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
    const current = new Date();
    const today = new Date(current.getFullYear(), current.getMonth(), current.getUTCDate());
    const courseDate = new Date(this.item.creationDate);
    const oneDay = 86400000;
    const duration = Number(((today.valueOf() - courseDate.valueOf()) / oneDay).toFixed(0));
    this.containerClass = {
      'green-border': duration > 0 && duration <= 14,
      'blue-border': duration < 0,
      'stared-background': this.item.stared,
    }
  }

  setStaredStatus() {
    this.stared = this.item.stared;
  }
}
