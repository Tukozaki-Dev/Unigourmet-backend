import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateClassGroupDto } from './dto/create-class-group.dto';
import { UpdateClassGroupDto } from './dto/update-class-group.dto';
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

  async findAll() {
    return await this.classGroupModel.find({});
  }

  async findOne(id: string) {
    return await this.classGroupModel.findById(id);
  }

  async update(id: string, updateClassGroupDto: UpdateClassGroupDto) {
    await this.classGroupModel.findOneAndUpdate(
      { _id: id },
      updateClassGroupDto,
    );
    return this.findOne(id);
  }

  async remove(id: string) {
    return await this.classGroupModel.findByIdAndDelete(id);
  }
}
