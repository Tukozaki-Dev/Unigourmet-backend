import { Module } from '@nestjs/common';
import { EventNoteService } from './event-note.service';
import { EventNoteController } from './event-note.controller';

@Module({
  controllers: [EventNoteController],
  providers: [EventNoteService]
})
export class EventNoteModule {}
