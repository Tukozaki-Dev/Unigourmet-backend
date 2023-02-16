
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProfessorDto } from './dto/create-professor.dto';
import { UpdateProfessorDto } from './dto/update-professor.dto';
import { Professor, ProfessorDocument } from './schemas/professor.schema';

export class ProfessorRepository {
  constructor(
    @InjectModel(Professor.name)
    private professorModel: Model<ProfessorDocument>,
  ) {}

  async create(createProfessorDto: CreateProfessorDto) {
    const createdProfessor = new this.professorModel(createProfessorDto);
    return await createdProfessor.save();
  }

  async findAll(documentsToSkip = 0, limitOfDocuments?: number) {
    const findQuery = this.professorModel
    .find()
    .sort({ _id: 1 })
    .skip(documentsToSkip);
 
  if (limitOfDocuments) {
    findQuery.limit(limitOfDocuments);
  }
  const results = await findQuery;
  const count = await this.professorModel.count();
 
  return { results, count };
  }

  async findOne(id: string) {
    const existingNote = this.professorModel.findById(id).exec();
    return await existingNote;
  }

  async findByIdAndUpdate(id: string, updateProfessorDto: UpdateProfessorDto) {
    await this.professorModel.findOneAndUpdate(
      { _id: id },
      updateProfessorDto,
    );
    return this.findOne(id);
  }

  async remove(id: string) {
    return await this.professorModel.findByIdAndDelete(id);
  }
  
}
