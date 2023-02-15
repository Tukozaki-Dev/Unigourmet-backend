import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus } from '@nestjs/common';
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
      }else {
        return response.status(204).json({
          message: `Nenhuma nota encontrada!`, data:null,
        });
      }
      
    }catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.noteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNoteDto: UpdateNoteDto) {
    return this.noteService.update(+id, updateNoteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.noteService.remove(+id);
  }
}
