import { HttpException, Injectable } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { NoteRepository } from './note.repository';

@Injectable()
export class NoteService {
  constructor(private readonly noteRepository: NoteRepository) {}
  
  async create(createNoteDto: CreateNoteDto) {
    const createdNote = await this.noteRepository.create(createNoteDto);
    return createdNote;
  }

  async findAll() {
    const noteData = await this.noteRepository.findAll();

    if(!noteData || noteData.length === 0) {

      throw new HttpException(`Nenhum orçamento encontrado!`, 204);
    }

    return noteData;
  }

  findOne(id: number) {
    return `This action returns a #${id} note`;
  }

  update(id: number, updateNoteDto: UpdateNoteDto) {
    return `This action updates a #${id} note`;
  }

  remove(id: number) {
    return `This action removes a #${id} note`;
  }
}
