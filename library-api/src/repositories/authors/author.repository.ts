import { Injectable } from '@nestjs/common';
import { NotFoundError } from 'library-api/src/common/errors';
import { AuthorId, Author } from 'library-api/src/entities';
import { GenreModel } from 'library-api/src/models';
import {
  PlainAuthorRepositoryOutput,
  CreateAuthorRepositoryInput,
} from 'library-api/src/repositories/authors/author.repository.type';
import { adaptAuthorEntityToPlainAuthorModel } from 'library-api/src/repositories/authors/author.utils';
import { DataSource, Repository, In } from 'typeorm';
import { v4 } from 'uuid';

@Injectable()
export class AuthorRepository extends Repository<Author> {
  constructor(public readonly dataSource: DataSource) {
    super(Author, dataSource.createEntityManager());
  }

  /**
   * Get all plain books
   * @returns Array of plain books
   */
  public async getAllPlain(): Promise<PlainAuthorRepositoryOutput[]> {
    const author = await this.find({})

    return author.map(adaptAuthorEntityToPlainAuthorModel);
  }

  /**
   * Get a book by its ID
   * @param id Book's ID
   * @returns Book if found
   * @throws 404: book with this ID was not found
   */
  public async getById(id: AuthorId): Promise<PlainAuthorRepositoryOutput> {
    const author = await this.findOne({
      where: { id },
    });

    if (!author) {
      throw new NotFoundError(`Book - '${id}'`);
    }

    return adaptAuthorEntityToPlainAuthorModel(author);
  }

  /**
   * Create a new Book
   * @param input Data to create the book
   * @returns Created author
   */
  public async createAuthor(
    input: CreateAuthorRepositoryInput,
  ): Promise<PlainAuthorRepositoryOutput> {
    const id = await this.dataSource.transaction(async (manager) => {
      const [newAuthor] = await manager.save<Author>([
        manager.create<Author>(Author, { ...input }),
      ]);
      return newAuthor.id;
      });
    return this.getById(id);
  }

  /**
   * Delete a book from database
   * @param id Author's id
   */
  public async deletebyid(id: AuthorId): Promise<void> {
    await this.delete(id);
  }
}
