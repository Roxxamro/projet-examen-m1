import { Injectable } from '@nestjs/common';
import { Genre } from 'library-api/src/entities';
import { GenreRepositoryOutput } from 'library-api/src/repositories/genres/genre.repository.type';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class GenreRepository extends Repository<Genre> {
  constructor(public readonly dataSource: DataSource) {
    super(Genre, dataSource.createEntityManager());
  }
  /**
   * Get all the genres stored in database
   * @returns An array with the list of all the genres
   */

  public async getAllPlain(): Promise<GenreRepositoryOutput[]> {
    const result = await this.find({
      order: { name: 'ASC' },
    });
    return result;
  }
}
