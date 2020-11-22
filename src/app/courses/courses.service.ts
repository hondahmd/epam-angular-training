import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CourseListItem } from './courses-list/courses-list-item-model';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  updateCourseItems: Subject<CourseListItem[]> = new Subject<CourseListItem[]>();
  courseItems: CourseListItem[] = [];
  initVals: CourseListItem[] = [
    {
      id: '1',
      title: 'A course',
      creationDate: '2020-10-01',
      duration: '90min',
      description: 'Angular basic course',
      stared: false,
    },
    {
      id: '2',
      title: 'B course',
      creationDate: '2020-10-30',
      duration: '30min',
      description: 'Angular advanced course',
      stared: true,
    },
    {
      id: '3',
      title: 'C course',
      creationDate: '2020-12-15',
      duration: '205min',
      description: 'Angular advanced course 2',
      stared: false,
    }
  ];

  constructor() { }

  updateItems(newItems): void {
    this.courseItems = newItems;
    this.updateCourseItems.next(newItems);
  }

  getItems(): CourseListItem[] {
    console.log(this.courseItems);
    return this.courseItems;
  }

  getItemById(id): CourseListItem {
    return this.courseItems.filter((item) => item.id === id)[0];
  }

  createItem(info): void {
    const newItems = [...this.courseItems];
    newItems.push(info);
    this.updateItems(newItems);
  }

  updateItem(newInfo): void {
    const newItems = this.courseItems.map((item) => {
      if (item.id === newInfo.id) {
        return newInfo;
      } else {
        return item;
      }
    });
    this.updateItems(newItems);
  }

  deleteItem(id): void {
    const newItems = this.courseItems.filter((item) => item.id !== id);
    this.updateItems(newItems);
  }
}
