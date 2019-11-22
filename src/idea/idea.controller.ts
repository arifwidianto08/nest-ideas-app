import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { IdeaService } from './idea.service';
import { IdeaDTO } from './idea.dto';

@Controller('idea')
export class IdeaController {
  constructor(private readonly ideaService: IdeaService) {}

  @Get()
  showAllIdeas() {
    return this.ideaService.showAll();
  }

  @Post()
  createIdea(@Body() data: IdeaDTO) {
    return this.ideaService.create(data);
  }

  @Get(':id')
  readIdea(@Param('id') id: number) {
    return this.ideaService.read(id);
  }

  @Put(':id')
  updateIdea(@Param('id') id: number, @Body() data: Partial<IdeaDTO>) {
    return this.ideaService.update(id, data);
  }

  @Delete(':id')
  deleteIdea(@Param('id') id: number) {
    return this.ideaService.delete(id);
  }
}
