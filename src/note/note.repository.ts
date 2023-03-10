import { UpdateNoteDto } from './dto/update-note.dto';
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

  async findAll(documentsToSkip = 0, limitOfDocuments?: number) {
    const findQuery = this.noteModel
    .find()
    .sort({ _id: 1 })
    .skip(documentsToSkip);
 
  if (limitOfDocuments) {
    findQuery.limit(limitOfDocuments);
  }
  const results = await findQuery;
  const count = await this.noteModel.count();
 
  return { results, count };
  }

  async findOne(id: string) {
    const existingNote = this.noteModel.findById(id).exec();
    return await existingNote;
  }

  async findByIdAndUpdate(id: string, updateNoteDto: UpdateNoteDto) {
    await this.noteModel.findOneAndUpdate(
      { _id: id },
      updateNoteDto,
    );
    return this.findOne(id);
  }

  async remove(id: string) {
    return await this.noteModel.findByIdAndDelete(id);
  }
  
}
