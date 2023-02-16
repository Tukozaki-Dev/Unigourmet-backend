import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus, HttpException, Query } from '@nestjs/common';
import { NoteService } from './note.service';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { PaginationParams } from 'src/common/utils/paginationParams';

@Controller('note')
export class NoteController {
  constructor(private readonly noteService: NoteService) {}

  @Post()
  async create(@Body() createNoteDto: CreateNoteDto) {
    try {
      const createdNote = await this.noteService.create(createNoteDto);

      return createdNote;
    }catch(err) {
      throw new HttpException(err.message, err.status);
    }
  }

  @Get()
  async findAll(@Query() paginationParams: PaginationParams) {
    try {
      const noteData = await this.noteService.findAll(paginationParams.page);
      return noteData;
    }catch(err){
      throw new HttpException(err.message, err.status);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const singleNoteData = await this.noteService.findOne(id);
      return singleNoteData;
    }catch(err){
      throw new HttpException(err.message, err.status);
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNoteDto: UpdateNoteDto) {
    try {
      const singleNoteData = this.noteService.update(id, updateNoteDto);
      return singleNoteData;
    }catch(err){
      throw new HttpException(err.message, err.status);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try{
      const deletedNote = this.noteService.remove(id);
        return deletedNote;
    }catch (err) {
      throw new HttpException(err.message, err.status);
    }
  }
}
