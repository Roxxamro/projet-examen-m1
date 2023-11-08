import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { GenrePresenter } from 'library-api/src/controllers/genres/genre.presenter';
import { GenreUseCases } from 'library-api/src/useCases/genres/genre.useCases';

@ApiTags('genres')
@Controller('genres')
export class GenreController {
  constructor(private readonly genreUseCases: GenreUseCases) {}

  @Get('/')
  @ApiOperation({
    description: 'Get all genres',
    operationId: 'getAllGenres',
  })
  @ApiOkResponse({
    isArray: true,
    type: GenrePresenter,
  })
  public async getAll(): Promise<GenrePresenter[]> {
    const result = await this.genreUseCases.getAllPlain();

    return result.map(GenrePresenter.from);
  }
}
