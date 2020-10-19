import { Component, OnInit, Input } from '@angular/core';
import { CourseListItem } from '../courses-list/courses-list-item-model';

@Component({
  selector: 'courses-courses-list-item',
  templateUrl: './courses-list-item.component.html',
  styleUrls: ['./courses-list-item.component.scss']
})
export class CoursesListItemComponent implements OnInit {
  @Input() item: CourseListItem

  constructor() { }

  ngOnInit(): void {
  }

}
