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

  async findAll(page: number) {
    let result;

    if (page <= 1) {
      result = await this.coordinatorModel.find().skip(0).limit(16).exec();
    } else {
      const x = page * 16 - 16;
      result = await this.coordinatorModel.find().skip(x).limit(16).exec();
    }

    const totalNotes = await this.coordinatorModel.countDocuments({});
    const pagesQuantity = Math.ceil(totalNotes / 16);

    return {
      notes: result,
      pagesQuantity: pagesQuantity,
      totalNotes: totalNotes,
    };
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
