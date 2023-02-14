import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { Note, NoteDocument } from './schemas/note.schema';

@Injectable()
export class NoteService {
  constructor(@InjectModel(Note.name) private noteModel: Model<NoteDocument>) {
  /* Primeiro de tudo, o NestJS está recebendo um Model do Mongoose. 
  aqui ele pede pra vc especificar qual collection do mongoDB ´pertence o Model. 
  nesse caso o Model<NoteDocument> significa q é um Model das notas */
  }
  
  async create(createNoteDto: CreateNoteDto) {
    /** o DTO é onde a gente faz a tipagem do objeto que vamos receber do frontend. 
    DTO é data transfer object. Vamos receber do front e depois jogar pra dentro do mongo 
    usando o productModel que criamos lá em cima com a ajuda do Mongoose */
    const createdNote = new this.noteModel(createNoteDto); //isso é o mongoose em ação
    return await createdNote.save();//outra função do mongoose pra salvar no BD o novo produto
  }

  findAll() {
    return `This action returns all note`;
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
