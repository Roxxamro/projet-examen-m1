import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import {
  BookPresenter,
  PlainBookPresenter,
} from 'library-api/src/controllers/books/book.presenter';
import { BookId } from 'library-api/src/entities';
import { BookUseCases } from 'library-api/src/useCases';
import { CreateBookDto } from './book.dto';

ApiTags('books')
@Controller('books')
export class BookController {
  constructor(private readonly bookUseCases: BookUseCases) {}

  @Get('/')
  @ApiOperation({ 
    description: 'Get all books',
    operationId: 'getAllBooks',
  })
  @ApiOkResponse({
    isArray: true,
    type: PlainBookPresenter,
  })
  public async getAll(): Promise<PlainBookPresenter[]> {
    const books = await this.bookUseCases.getAllPlain();

    return books.map(PlainBookPresenter.from);
  }

  @Get('/:id')
  @ApiOperation({
    description: 'Retrouver un livre par son ID',
    operationId: 'getBook',
  })
  @ApiOkResponse({
    type: PlainBookPresenter,
  })
  public async getById(@Param('id') id: BookId): Promise<BookPresenter> {
    const book = await this.bookUseCases.getById(id);

    return BookPresenter.from(book);
  }

  @Post()
  public async createBook(
    @Body() input: CreateBookDto,
  ): Promise<BookPresenter> {
    const book = await this.bookUseCases.create(input);

    return BookPresenter.from(book);
  }

  @Delete('/:id')
  public async deleteById(@Param('id') id: BookId): Promise<void> {
    await this.bookUseCases.deletebyid(id);
  }
}
