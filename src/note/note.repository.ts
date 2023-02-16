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

  async findAll(page: number) {
    let result;
    
    if (page <= 1){
      result = await this.noteModel.find().skip(0).limit(16).exec();
    }

    else {
      let x; 
      x = page * 16 - 16;
      result = await this.noteModel.find().skip(x).limit(16).exec();
    }

    let totalNotes = await this.noteModel.countDocuments({});
    let pagesQuantity = Math.ceil(totalNotes / 16); 

    return {
      notes:result,
      pagesQuantity: pagesQuantity,
      totalNotes: totalNotes
    }
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
