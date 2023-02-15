import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { isValidObjectId } from 'mongoose';
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

      throw new HttpException(`Nenhuma nota encontrada!`, 204);
    }

    return noteData;
  }

  async findOne(id: string) {
    if(!isValidObjectId(id)){

      throw new HttpException('ID não é um ObjectId Válido para o Mongoose', HttpStatus.BAD_REQUEST);
    }
    
    try{
      const existingNote = await this.noteRepository.findOne(id);
      if(!existingNote) {

        throw new HttpException(`Nota com #${id} não encontrada`, 204);
      }

      return existingNote;
    }catch(err){

      throw new HttpException(err.message, err.status);
    }
    
  }

  async update(id: string, updateNoteDto: UpdateNoteDto) {
    if(!isValidObjectId(id)){

      throw new HttpException('ID não é um ObjectId Válido para o Mongoose',HttpStatus.BAD_REQUEST);
    }

    try {
      const existingNote = await this.noteRepository.findByIdAndUpdate(id, updateNoteDto);
      if(!existingNote) {
        throw new HttpException(`Nota com id #${id} não encontrada`, 204);
      }

      return existingNote;
    }catch(err){

      throw new HttpException(err.message, err.status);
    }
  }


  remove(id: number) {
    return `This action removes a #${id} note`;
  }
}
