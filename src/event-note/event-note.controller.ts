import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EventNoteService } from './event-note.service';
import { CreateEventNoteDto } from './dto/create-event-note.dto';
import { UpdateEventNoteDto } from './dto/update-event-note.dto';

@Controller('event-note')
export class EventNoteController {
  constructor(private readonly eventNoteService: EventNoteService) {}

  @Post()
  create(@Body() createEventNoteDto: CreateEventNoteDto) {
    return this.eventNoteService.create(createEventNoteDto);
  }

  @Get()
  findAll() {
    return this.eventNoteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventNoteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEventNoteDto: UpdateEventNoteDto) {
    return this.eventNoteService.update(+id, updateEventNoteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventNoteService.remove(+id);
  }
}
