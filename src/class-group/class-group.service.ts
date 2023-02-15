import { Injectable } from '@nestjs/common';
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

  async findAll() {
    const allClassGroups = await this.classGroupRepository.findAll();
    return allClassGroups;
  }

  async findOne(id: string) {
    const getClassGroup = await this.classGroupRepository.findOne(id);
    return getClassGroup;
  }

  async update(id: string, updateClassGroupDto: UpdateClassGroupDto) {
    const updatedClassGroup = await this.classGroupRepository.update(
      id,
      updateClassGroupDto,
    );
    return updatedClassGroup;
  }

  async remove(id: string) {
    const deleteClassGroup = await this.classGroupRepository.remove(id);
    return deleteClassGroup;
  }
}
