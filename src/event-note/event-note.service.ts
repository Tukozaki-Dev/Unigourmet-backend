import { Injectable } from '@nestjs/common';
import { CreateEventNoteDto } from './dto/create-event-note.dto';
import { UpdateEventNoteDto } from './dto/update-event-note.dto';

@Injectable()
export class EventNoteService {
  create(createEventNoteDto: CreateEventNoteDto) {
    return 'This action adds a new eventNote';
  }

  findAll() {
    return `This action returns all eventNote`;
  }

  findOne(id: number) {
    return `This action returns a #${id} eventNote`;
  }

  update(id: number, updateEventNoteDto: UpdateEventNoteDto) {
    return `This action updates a #${id} eventNote`;
  }

  remove(id: number) {
    return `This action removes a #${id} eventNote`;
  }
}
