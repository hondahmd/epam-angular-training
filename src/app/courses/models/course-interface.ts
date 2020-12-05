import {AuthorInterface} from './author-interface';

export interface CourseInterface {
  id: number;
  name: string;
  date: string;
  length: number;
  description: string;
  authors: AuthorInterface[];
  isTopRated: boolean;
}
