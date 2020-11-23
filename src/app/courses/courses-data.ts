import {CourseInterface} from './models/course-interface';

export const coursesData: CourseInterface[] = [
  {
    id: '1',
    title: 'A course',
    creationDate: '2020-10-01',
    duration: 90,
    description: 'Angular basic course',
    stared: false,
  },
  {
    id: '2',
    title: 'B course',
    creationDate: '2020-10-30',
    duration: 30,
    description: 'Angular advanced course',
    stared: true,
  },
  {
    id: '3',
    title: 'C course',
    creationDate: '2020-12-15',
    duration: 205,
    description: 'Angular advanced course 2',
    stared: false,
  }
];
