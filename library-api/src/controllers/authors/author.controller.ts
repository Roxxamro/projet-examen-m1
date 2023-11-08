import { Body, Controller, Get, Param, Post, Delete } from '@nestjs/common';
import { PlainAuthorPresenter } from 'library-api/src/controllers/authors/author.presenter';
import { AuthorId } from 'library-api/src/entities';
import { AuthorUseCases } from 'library-api/src/useCases';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateAuthorDto } from './author.dto';

ApiTags('authors');
@Controller('authors')
export class AuthorController {
  constructor(private readonly authorUseCases: AuthorUseCases) {}

  @Get('/')
  @ApiOperation({
    description: 'Get all authors',
    operationId: 'getAllAuthors',
  })
  @ApiOkResponse({
    isArray: true,
    type: PlainAuthorPresenter,
  })
  public async getAll(): Promise<PlainAuthorPresenter[]> {
    const authors = await this.authorUseCases.getAllPlain();

    return authors.map(PlainAuthorPresenter.from);
  }

  @Get('/:id')
  @ApiOperation({
    description: 'Retrouver un auteur par son ID',
    operationId: 'getAuthor',
  })
  @ApiOkResponse({
    type: PlainAuthorPresenter,
  })
  public async getById(
    @Param('id') id: AuthorId,
  ): Promise<PlainAuthorPresenter> {
    const author = await this.authorUseCases.getById(id);

    return PlainAuthorPresenter.from(author);
  }

  @Post()
  public async createauthor(
    @Body() input: CreateAuthorDto,
  ): Promise<PlainAuthorPresenter> {
    const author = await this.authorUseCases.create(input);

    return PlainAuthorPresenter.from(author);
  }

  @Delete('/:id')
  public async deleteById(@Param('id') id: AuthorId): Promise<void> {
    await this.authorUseCases.deleteById(id);
  }
}
