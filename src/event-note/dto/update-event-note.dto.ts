import { PartialType } from '@nestjs/mapped-types';
import { CreateEventNoteDto } from './create-event-note.dto';

export class UpdateEventNoteDto extends PartialType(CreateEventNoteDto) {}
