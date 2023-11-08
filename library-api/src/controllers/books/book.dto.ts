import { Author, Genre } from 'library-api/src/entities';

export class CreateBookDto {
  name: string;

  writtenOn: Date;

  author: Author;

  genres: Genre[];
}
