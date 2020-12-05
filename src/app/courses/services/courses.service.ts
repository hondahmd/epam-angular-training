import { Injectable } from '@angular/core';
import { CourseInterface } from '../models/course-interface';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  constructor(private http: HttpClient) {
  }

  getItems(count: number, textFragment?: string): Observable<CourseInterface[]> {
    const params: {[param: string]: string} = {
      count: count + '',
      textFragment: textFragment || '', //this excludes 'null' or 'undefined' values
      sort: 'date',
    };
    return this.http
      .get<CourseInterface[]>(environment.apiUrl + '/courses', {params});
  }

  getItemById(id: number): Observable<CourseInterface> {
    return this.http
      .get<CourseInterface>(environment.apiUrl + '/courses/' + id);
  }

  createItem(data: CourseInterface): Observable<CourseInterface> {
    return this.http
      .post<CourseInterface>(environment.apiUrl + '/courses', data);
  }

  updateItem(data: CourseInterface): Observable<CourseInterface> {
    return this.http
      .patch<CourseInterface>(environment.apiUrl + '/courses/' + data.id, data);
  }

  deleteItem(id: number): Observable<void> {
    return this.http
      .delete<void>(environment.apiUrl + '/courses/' + id);
  }
}
