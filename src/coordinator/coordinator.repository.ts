import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCoordinatorDto } from './dto/create-coordinator.dto';
import { UpdateCoordinatorDto } from './dto/update-coordinator.dto';
import { CoordinatorDocument } from './schemas/coordinator.schema';

export class CoordinatorRepository {
  constructor(
    @InjectModel(CoordinatorRepository.name)
    private coordinatorModel: Model<CoordinatorDocument>,
  ) {}
  async create(createCoordinatorDto: CreateCoordinatorDto) {
    const createdCoordinator = new this.coordinatorModel(createCoordinatorDto);
    return await createdCoordinator.save();
  }

  async findAll() {
    return await this.coordinatorModel.find({});
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
