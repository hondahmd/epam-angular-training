import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CourseInterface, BECoursesInterface } from '../models/course-interface';
import {coursesData} from '../courses-data';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  constructor(private http: HttpClient) {}

  private items = coursesData; //Initial value

  getItems(countOfCourses: number, filter: string): Observable<BECoursesInterface[]> {
    const params = {
      count: countOfCourses + '',
      textFragment: filter || '',
      sort: 'date',
    }
    return this.http.get<BECoursesInterface[]>(environment.apiUrl + '/courses', { params });
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
