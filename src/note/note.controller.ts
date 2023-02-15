import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus, HttpException } from '@nestjs/common';
import { NoteService } from './note.service';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';

@Controller('note')
export class NoteController {
  constructor(private readonly noteService: NoteService) {}

  @Post()
  async create(@Res() response ,@Body() createNoteDto: CreateNoteDto) {
    try {
      const createdNote = await this.noteService.create(createNoteDto);

      return response.status(HttpStatus.CREATED).json({
        message: 'Nota criada com sucesso!',
        createdNote,
      });
    }catch(err) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Erro: Nota não pode ser criada.',
        error: 'Bad Request',
      });
    }
  }

  @Get()
  async findAll(@Res() response) {
    try {
      const noteData = await this.noteService.findAll();
      if(!!noteData){
        return response.status(HttpStatus.OK).json({
          message: 'Todas as notas foram encontradas com sucesso', 
          noteData,
        });
      }
    }catch(err){
      throw new HttpException(err.message, err.status);
    }
  }

  @Get(':id')
  async findOne(@Res() response, @Param('id') id: string) {
    try {
      const existingNote = await this.noteService.findOne(id);
      
      if(!!existingNote){
        return response.status(HttpStatus.OK).json({
          message: 'Nota encontrado com sucesso', 
          existingNote,
        });
      }else{
        return response.status(204).json({
          message: `Nota com id #${id} não encontrada`, data:null,
        });
      }
      
    }catch(err){
      throw new HttpException(err.message, err.status);
    }
  }

  @Patch(':id')
  update(@Res() response, @Param('id') id: string, @Body() updateNoteDto: UpdateNoteDto) {
    try {
      const existingNote = this.noteService.update(id, updateNoteDto);
      if(!!existingNote){
        return response.status(HttpStatus.OK).json({
          message: 'Nota foi atualizada com sucesso', 
          existingNote,
        });
      }
    }catch(err){
      throw new HttpException(err.message, err.status);
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
  }
}
