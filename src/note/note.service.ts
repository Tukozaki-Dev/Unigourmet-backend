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

  async findAll(documentsToSkip = 0, limitOfDocuments?: number) {
    const noteData = await this.noteRepository.findAll(documentsToSkip, limitOfDocuments);
    return noteData;
  }

  async findOne(id: string) {
    if(!isValidObjectId(id)){
      throw new HttpException('ID não é um ObjectId Válido para o Mongoose', HttpStatus.BAD_REQUEST);
    }
    try{
      const singleNoteData = await this.noteRepository.findOne(id);
      return singleNoteData;
    }catch(err){
      throw new HttpException(err.message, err.status);
    }
  }

  async update(id: string, updateNoteDto: UpdateNoteDto) {
    if(!isValidObjectId(id)){
      throw new HttpException('ID não é um ObjectId Válido para o Mongoose',HttpStatus.BAD_REQUEST);
    }
    try {
      const singleNoteData = await this.noteRepository.findByIdAndUpdate(id, updateNoteDto);
      return singleNoteData;
    }catch(err){
      throw new HttpException(err.message, err.status);
    }
  }

  async remove(id: string) {
    if(!isValidObjectId(id)){
      throw new HttpException('ID não é um ObjectId Válido para o Mongoose',HttpStatus.BAD_REQUEST);
    }
    try {
      const deletedQNote = await this.noteRepository.remove(id);
      return deletedQNote;
    }catch(err){
      throw new HttpException(err.message, err.status);
    }
  }
}
