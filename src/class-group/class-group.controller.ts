/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { response } from 'express';
import { ClassGroupService } from './class-group.service';
import { CreateClassGroupDto } from './dto/create-class-group.dto';
import { UpdateClassGroupDto } from './dto/update-class-group.dto';

@Controller('class-group')
export class ClassGroupController {
  constructor(private readonly classGroupService: ClassGroupService) {}

  @Post()
  async create(@Body() createClassGroupDto: CreateClassGroupDto) {
    try {
      const createdClassGroup = await this.classGroupService.create(
        createClassGroupDto,
      );
      return createdClassGroup;
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST, err);
    }
  }

  @Get()
  findAll() {
    return this.classGroupService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.classGroupService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateClassGroupDto: UpdateClassGroupDto,
  ) {
    return this.classGroupService.update(+id, updateClassGroupDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.classGroupService.remove(+id);
  }
}
