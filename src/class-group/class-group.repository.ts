import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateClassGroupDto } from './dto/create-class-group.dto';
import { ClassGroup, ClassGroupDocument } from './schemas/class-group.schema';

export class ClassGroupRepository {
  constructor(
    @InjectModel(ClassGroup.name)
    private classGroupModel: Model<ClassGroupDocument>,
  ) {}
  async create(createClassGroupDto: CreateClassGroupDto) {
    const createdClassGroup = new this.classGroupModel(createClassGroupDto);
    return await createdClassGroup.save();
  }
}
