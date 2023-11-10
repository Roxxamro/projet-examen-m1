import { AuthorModel } from './author.model';

export type PlainBookModel = {
  id: string;
  name: string;
  writtenOn: Date;
  genres: string[];
  author: AuthorModel;
};

export type CreateBookModel = {
  name: string;
  writtenOn: Date;
  genres: string[];
  author: AuthorModel;
}

export type UpdateBookModel = {
  id: string;
  name: string;
  writtenOn: Date;
  author: AuthorModel;
  genres: string[];
}
