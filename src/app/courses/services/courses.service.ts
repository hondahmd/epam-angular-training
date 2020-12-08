import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { BECoursesInterface } from '../models/course-interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  constructor(private http: HttpClient) {}

  getItems(countOfCourses: number, filter: string): Observable<BECoursesInterface[]> {
    const params = {
      count: countOfCourses + '',
      textFragment: filter || '',
      sort: 'date',
    }
    return this.http.get<BECoursesInterface[]>(environment.apiUrl + '/courses', { params });
  }

  getItemById(id: string): Observable<BECoursesInterface> {
    return this.http.get<BECoursesInterface>(environment.apiUrl + `/courses/${id}`);
  }

  createItem(data: BECoursesInterface): Observable<BECoursesInterface> {
    return this.http.post<BECoursesInterface>(environment.apiUrl + '/courses', data)
  }

  updateItem(data: BECoursesInterface): Observable<BECoursesInterface> {
    return this.http.patch<BECoursesInterface>(environment.apiUrl + `/courses/${data.id}`, data)
  }

  deleteItem(id: string) {
    return this.http.delete(environment.apiUrl + `/courses/${id}`);
  }
}
