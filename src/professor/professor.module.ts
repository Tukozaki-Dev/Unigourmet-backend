import { ProfessorRepository } from './professor.repository';
import { Module } from '@nestjs/common';
import { ProfessorService } from './professor.service';
import { ProfessorController } from './professor.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Professor, ProfessorSchema } from './schemas/professor.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Professor.name, schema: ProfessorSchema }])],
  controllers: [ProfessorController],
  providers: [ProfessorService, ProfessorRepository]
})
export class ProfessorModule {}
