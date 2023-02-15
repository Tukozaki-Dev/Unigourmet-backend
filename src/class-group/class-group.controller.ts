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
  async findAll() {
    try {
      const allClassGroups = await this.classGroupService.findAll();
      return allClassGroups;
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST, err);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const getClassGroup = await this.classGroupService.findOne(id);
      return getClassGroup;
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST, err);
    }
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateClassGroupDto: UpdateClassGroupDto,
  ) {
    try {
      const updateClassGroup = await this.classGroupService.update(id, updateClassGroupDto);
      return updateClassGroup;
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST, err);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      const deleteClassGroup = await this.classGroupService.remove(id);
      return deleteClassGroup;
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST, err);
    }
  }
}
