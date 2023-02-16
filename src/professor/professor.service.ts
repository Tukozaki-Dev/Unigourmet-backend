import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { isValidObjectId } from 'mongoose';
import { CreateProfessorDto } from './dto/create-professor.dto';
import { UpdateProfessorDto } from './dto/update-professor.dto';
import { ProfessorRepository } from './professor.repository';

@Injectable()
export class ProfessorService {
  constructor(private readonly professorRepository: ProfessorRepository) {}

  async create(createProfessorDto: CreateProfessorDto) {
    const createdProfessor = await this.professorRepository.create(createProfessorDto);
    return createdProfessor;
  }

  async findAll(documentsToSkip = 0, limitOfDocuments?: number) {
    const professorData = await this.professorRepository.findAll(documentsToSkip, limitOfDocuments);
    return professorData;
  }

  async findOne(id: string) {
    if(!isValidObjectId(id)){
      throw new HttpException('ID não é um ObjectId Válido para o Mongoose', HttpStatus.BAD_REQUEST);
    }
    try{
      const singleProfessorData = await this.professorRepository.findOne(id);
      return singleProfessorData;
    }catch(err){
      throw new HttpException(err.message, err.status);
    }
  }

  async update(id: string, updateProfessorDto: UpdateProfessorDto) {
    if(!isValidObjectId(id)){
      throw new HttpException('ID não é um ObjectId Válido para o Mongoose',HttpStatus.BAD_REQUEST);
    }
    try {
      const singleProfessorData = await this.professorRepository.findByIdAndUpdate(id, updateProfessorDto);
      return singleProfessorData;
    }catch(err){
      throw new HttpException(err.message, err.status);
    }
  }

  async remove(id: string) {
    if(!isValidObjectId(id)){
      throw new HttpException('ID não é um ObjectId Válido para o Mongoose',HttpStatus.BAD_REQUEST);
    }
    try {
      const deletedProfessor = await this.professorRepository.remove(id);
      return deletedProfessor;
    }catch(err){
      throw new HttpException(err.message, err.status);
    }
  }
}
