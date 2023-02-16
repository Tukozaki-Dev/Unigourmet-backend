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

  async findAll(documentsToSkip = 0, limitOfDocuments?: number) {
    const findQuery = this.classGroupModel
      .find()
      .sort({ _id: 1 })
      .skip(documentsToSkip);

    if (limitOfDocuments) {
      findQuery.limit(limitOfDocuments);
    }
    const results = await findQuery;
    const count = await this.classGroupModel.count();

    return { results, count };
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
