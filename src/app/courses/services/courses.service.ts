import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {BECoursesInterface, CourseInterface} from '../models/course-interface';
import { environment } from '../../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  constructor(private http: HttpClient) {}

  getItems(countOfCourses: number, filter: string): Observable<CourseInterface[]> {
    const params = {
      count: countOfCourses + '',
      textFragment: filter || '',
      sort: 'date',
    };
    return this.http
      .get<BECoursesInterface[]>(environment.apiUrl + '/courses', { params })
      .pipe(
        map(resp => resp.map(item => this.convertFromBE(item)))
      );
  }

  getItemById(id: string): Observable<CourseInterface> {
    return this.http
      .get<BECoursesInterface>(environment.apiUrl + `/courses/${id}`)
      .pipe(
        map(resp => this.convertFromBE(resp))
      );
  }

  createItem(data: CourseInterface): Observable<CourseInterface> {
    return this.http
      .post<BECoursesInterface>(environment.apiUrl + '/courses', this.convertFromFE(data))
      .pipe(
        map(resp => this.convertFromBE(resp))
      );
  }

  updateItem(data: CourseInterface): Observable<CourseInterface> {
    return this.http
      .patch<BECoursesInterface>(environment.apiUrl + `/courses/${data.id}`, this.convertFromFE(data))
      .pipe(
        map(resp => this.convertFromBE(resp))
      );
  }

  deleteItem(id: string) {
    return this.http.delete(environment.apiUrl + `/courses/${id}`);
  }

  convertFromBE(data: BECoursesInterface): CourseInterface {
    return {
      id: String(data.id),
      title: data.name,
      creationDate: data.date ? data.date.substr(0, 10) : null,
      description: data.description,
      duration: data.length,
      stared: data.isTopRated,
      authors: data.authors,
    }
  }

  convertFromFE(data: CourseInterface): BECoursesInterface {
    return {
      id: Number(data.id),
      name: data.title,
      date: data.creationDate,
      length: data.duration,
      description: data.description,
      isTopRated: data.stared,
      authors: data.authors,
    }
  }
}
