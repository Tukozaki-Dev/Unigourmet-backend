import { Module } from '@nestjs/common';
import { CoordinatorService } from './coordinator.service';
import { CoordinatorController } from './coordinator.controller';
import { CoordinatorRepository } from './coordinator.repository';
import { Coordinator, CoordinatorSchema } from './schemas/coordinator.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Coordinator.name, schema: CoordinatorSchema },
    ]),
  ],
  controllers: [CoordinatorController],
  providers: [CoordinatorService, CoordinatorRepository],
})
export class CoordinatorModule {}
