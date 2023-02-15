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
    return await createdClassGroup;
  }

  findAll() {
    return `This action returns all classGroup`;
  }

  findOne(id: number) {
    return `This action returns a #${id} classGroup`;
  }

  update(id: number, updateClassGroupDto: UpdateClassGroupDto) {
    return `This action updates a #${id} classGroup`;
  }

  remove(id: number) {
    return `This action removes a #${id} classGroup`;
  }
}
