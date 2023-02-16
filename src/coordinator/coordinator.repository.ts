import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCoordinatorDto } from './dto/create-coordinator.dto';
import { UpdateCoordinatorDto } from './dto/update-coordinator.dto';
import { Coordinator, CoordinatorDocument } from './schemas/coordinator.schema';

export class CoordinatorRepository {
  constructor(
    @InjectModel(Coordinator.name)
    private coordinatorModel: Model<CoordinatorDocument>,
  ) {}
  async create(createCoordinatorDto: CreateCoordinatorDto) {
    const createdCoordinator = new this.coordinatorModel(createCoordinatorDto);
    return await createdCoordinator.save();
  }

  async findAll(documentsToSkip = 0, limitOfDocuments?: number) {
    const findQuery = this.coordinatorModel
      .find()
      .sort({ _id: 1 })
      .skip(documentsToSkip);

    if (limitOfDocuments) {
      findQuery.limit(limitOfDocuments);
    }
    const results = await findQuery;
    const count = await this.coordinatorModel.count();

    return { results, count };
  }

  async findOne(id: string) {
    return await this.coordinatorModel.findById(id);
  }

  async update(id: string, updateCoordinatorDto: UpdateCoordinatorDto) {
    await this.coordinatorModel.findOneAndUpdate(
      { _id: id },
      updateCoordinatorDto,
    );
    return this.findOne(id);
  }

  async remove(id: string) {
    return await this.coordinatorModel.findByIdAndDelete(id);
  }
}
