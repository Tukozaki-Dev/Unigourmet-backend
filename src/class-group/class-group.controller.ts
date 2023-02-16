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
  Query,
} from '@nestjs/common';
import { PaginationParams } from 'src/common/utils/paginationParams';
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
  async findAll(@Query() { skip, limit }: PaginationParams) {
    try {
      const classGroupsData = await this.classGroupService.findAll(
        skip,
        limit,
      );
      return classGroupsData;
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST, err);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const singleClassGroupData = await this.classGroupService.findOne(id);
      return singleClassGroupData;
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
      const singleClassGroupData = await this.classGroupService.update(id, updateClassGroupDto);
      return singleClassGroupData;
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST, err);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      const deletedClassGroup = await this.classGroupService.remove(id);
      return deletedClassGroup;
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST, err);
    }
  }
}
