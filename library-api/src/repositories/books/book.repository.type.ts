import { BookModel, PlainBookModel } from 'library-api/src/models/book.model';

export type PlainBookRepositoryOutput = PlainBookModel;
export type BookRepositoryOutput = BookModel;
export type CreateBookRepositoryInput = Omit<BookModel, 'id'>;