import { Injectable } from '@angular/core';
import { CourseInterface } from '../models/course-interface';
import {coursesData} from '../courses-data';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private items = coursesData; //Initial value

  getItems(): CourseInterface[] {
    return this.items;
  }

  getItemById(id: string): CourseInterface {
    return this.items.find(item => item.id === id);
  }

  createItem(data: CourseInterface) {
    let maxId = 0;
    this.items.forEach(item => {
      if (+item.id > maxId) {
        maxId = +item.id;
      }
    });
    data.id = (maxId + 1) + '';
    const newItems = [...this.items];
    newItems.push(data);
    this.items = newItems;
  }

  updateItem(data: CourseInterface) {
    this.items = this.items.map(item => item.id === data.id ? data : item);
  }

  deleteItem(id: string) {
    this.items = this.items.filter(item => item.id !== id);
  }
}
