import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { isValidObjectId } from 'mongoose';
import { ClassGroupRepository } from './class-group.repository';
import { CreateClassGroupDto } from './dto/create-class-group.dto';
import { UpdateClassGroupDto } from './dto/update-class-group.dto';

@Injectable()
export class ClassGroupService {
  constructor(private readonly classGroupRepository: ClassGroupRepository) {}

  async create(createClassGroupDto: CreateClassGroupDto) {
    const createdClassGroup = await this.classGroupRepository.create(
      createClassGroupDto,
    );
    return createdClassGroup;
  }

  async findAll(documentsToSkip = 0, limitOfDocuments?: number) {
    const classGroupsData = await this.classGroupRepository.findAll(
      documentsToSkip,
      limitOfDocuments,
    );
    return classGroupsData;
  }

  async findOne(id: string) {
    if (!isValidObjectId(id)) {
      throw new HttpException('ID inválido', HttpStatus.BAD_REQUEST);
    }
    try {
      const singleClassGroupData = await this.classGroupRepository.findOne(id);

      if (!singleClassGroupData) {
        throw new HttpException(`Turma ${id} não encontrada`, 204);
      }

      return singleClassGroupData;
    } catch (err) {
      throw new HttpException(err.message, err.status);
    }
  }

  async update(id: string, updateClassGroupDto: UpdateClassGroupDto) {
    if (!isValidObjectId(id)) {
      throw new HttpException('ID inválido', HttpStatus.BAD_REQUEST);
    }
    try {
      const singleClassGroupData = await this.classGroupRepository.update(
        id,
        updateClassGroupDto,
      );

      if (!singleClassGroupData) {
        throw new HttpException(`Turma ${id} não encontrada`, 204);
      }

      return singleClassGroupData;
    } catch (err) {
      throw new HttpException(err.message, err.status);
    }
  }

  async remove(id: string) {
    if (!isValidObjectId(id)) {
      throw new HttpException('ID inválido', HttpStatus.BAD_REQUEST);
    }
    try {
      const deletedClassGroup = await this.classGroupRepository.remove(id);

      if (!deletedClassGroup) {
        throw new HttpException(`Turma ${id} não encontrada`, 204);
      }

      return deletedClassGroup;
    } catch (err) {
      throw new HttpException(err.message, err.status);
    }
  }
}
