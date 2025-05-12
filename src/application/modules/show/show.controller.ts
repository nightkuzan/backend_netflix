import { Controller, Get, Param } from '@nestjs/common';
import { ShowService } from 'src/application/modules/show/show.service';
import { Show } from 'src/domain/entities/show.entity';

@Controller('api/shows')
export class ShowController {
  constructor(private readonly showService: ShowService) {}

  @Get()
  async getAllShows(): Promise<Show[]> {
    return this.showService.getAll();
  }

  @Get(':id')
  async getShowById(@Param('id') id: string): Promise<Show | null> {
    return this.showService.getById(id);
  }
}
