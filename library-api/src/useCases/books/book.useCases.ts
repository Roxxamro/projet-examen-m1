import { Injectable } from '@nestjs/common';
import { BookId } from 'library-api/src/entities';
import { BookRepository } from 'library-api/src/repositories';
import {
  BookUseCasesOutput,
  CreateBookUseCasesInput,
  PlainBookUseCasesOutput,
} from 'library-api/src/useCases/books/book.useCases.type';

@Injectable()
export class BookUseCases {
  constructor(private readonly bookRepository: BookRepository) {}

  /**
   * Get all plain books
   * @returns Array of plain books
   */
  public async getAllPlain(): Promise<PlainBookUseCasesOutput[]> {
    return this.bookRepository.getAllPlain();
  }

  /**
   * Get a book by its ID
   * @param id Book's ID
   * @returns Book if found
   * @throws 404: book with this ID was not found
   */
  public async getById(id: BookId): Promise<BookUseCasesOutput> {
    return this.bookRepository.getById(id);
  }

  /**
   * Create a new Book
   * @Param input Data to create the new book
   * @returns Created Book
   */
  public async create(
    input: CreateBookUseCasesInput,
  ): Promise<BookUseCasesOutput> {
    return this.bookRepository.createBook(input);
  }

  /**
   * Delete a book from Database
   * @param id Book's ID
   * @throws NotFoundException : no book found
   */
  public async deletebyid(id: BookId): Promise<void> {
    const book = await this.getById(id);
    await this.bookRepository.deletebyid(book.id);
  }
}
