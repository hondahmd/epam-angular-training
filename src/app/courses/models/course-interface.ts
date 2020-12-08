import { AuthorInterface } from './author-interface';

export interface CourseInterface {
  id: string;
  title: string;
  creationDate: string;
  duration: number;
  description: string;
  stared: boolean;
  authors: AuthorInterface;
}

export interface BECoursesInterface {
  id: number;
  name: string;
  date: string;
  length: number;
  description: string;
  authors: AuthorInterface;
  isTopRated: boolean;
}
