import { AuthorModel } from './author.model';

export type PlainBookModel = {
  id: string;
  name: string;
  writtenOn: Date;
  genres: string[];
  author: AuthorModel;
};
