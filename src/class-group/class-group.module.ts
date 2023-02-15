import { Module } from '@nestjs/common';
import { ClassGroupService } from './class-group.service';
import { ClassGroupController } from './class-group.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ClassGroup, ClassGroupSchema } from './schemas/class-group.schema';
import { ClassGroupRepository } from './class-group.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ClassGroup.name, schema: ClassGroupSchema },
    ]),
  ],
  controllers: [ClassGroupController],
  providers: [ClassGroupService, ClassGroupRepository],
})
export class ClassGroupModule {}
