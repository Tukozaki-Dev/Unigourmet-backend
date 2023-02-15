import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateNoteDto } from './dto/create-note.dto';
import { Note, NoteDocument } from './schemas/note.schema';

export class NoteRepository {
  constructor(
    @InjectModel(Note.name)
    private noteModel: Model<NoteDocument>,
  ) {}

  async create(createNoteDto: CreateNoteDto) {
    const createdNote = new this.noteModel(createNoteDto);
    return await createdNote.save();
  }

  async findAll() {
    const noteData = this.noteModel.find().exec();
    return await noteData;
  }

}
