import { Injectable } from '@nestjs/common';
import { GenreRepository } from 'library-api/src/repositories/genres/genre.repository';
import { GenreModelOutput } from 'library-api/src/useCases/genres/genre.useCases.type';

@Injectable()
export class GenreUseCases {
  constructor(private readonly genreRepository: GenreRepository) {}

  /**
   * Get all the types stored in database
   * @returns List of all the types
   */
  public async getAllPlain(): Promise<GenreModelOutput[]> {
    return this.genreRepository.getAllPlain();
  }
}