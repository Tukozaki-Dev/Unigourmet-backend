import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, Query } from '@nestjs/common';
import { ProfessorService } from './professor.service';
import { CreateProfessorDto } from './dto/create-professor.dto';
import { UpdateProfessorDto } from './dto/update-professor.dto';
import { PaginationParams } from 'src/common/utils/paginationParams';

@Controller('professor')
export class ProfessorController {
  constructor(private readonly professorService: ProfessorService) {}

  @Post()
  async create(@Body() createProfessorDto: CreateProfessorDto) {
    try {
      const createdProfessor = await this.professorService.create(createProfessorDto);

      return createdProfessor;
    }catch(err) {
      throw new HttpException(err.message, err.status);
    }
  }

  @Get()
  async findAll(@Query() { skip, limit }: PaginationParams) {
    try {
      const professorData = await this.professorService.findAll(skip, limit);
      return professorData;
    }catch(err){
      throw new HttpException(err.message, err.status);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const singleProfessorData = await this.professorService.findOne(id);
      return singleProfessorData;
    }catch(err){
      throw new HttpException(err.message, err.status);
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProfessorDto: UpdateProfessorDto) {
    try {
      const singleProfessorData = this.professorService.update(id, updateProfessorDto);
      return singleProfessorData;
    }catch(err){
      throw new HttpException(err.message, err.status);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try{
      const deletedProfessor = this.professorService.remove(id);
        return deletedProfessor;
    }catch (err) {
      throw new HttpException(err.message, err.status);
    }
  }
}
