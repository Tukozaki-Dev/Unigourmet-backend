import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { PaginationParams } from 'src/common/utils/paginationParams';
import { CoordinatorService } from './coordinator.service';
import { CreateCoordinatorDto } from './dto/create-coordinator.dto';
import { UpdateCoordinatorDto } from './dto/update-coordinator.dto';

@Controller('coordinator')
export class CoordinatorController {
  constructor(private readonly coordinatorService: CoordinatorService) {}

  @Post()
  async create(@Body() createCoordinatorDto: CreateCoordinatorDto) {
    try {
      const createdCoordinator = await this.coordinatorService.create(
        createCoordinatorDto,
      );
      return createdCoordinator;
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST, err);
    }
  }

  @Get()
  async findAll(@Query() paginationParams: PaginationParams) {
    try {
      const coordinatorsData = await this.coordinatorService.findAll(
        paginationParams.page,
      );
      return coordinatorsData;
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST, err);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const singleCoordinatorData = await this.coordinatorService.findOne(id);
      return singleCoordinatorData;
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST, err);
    }
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCoordinatorDto: UpdateCoordinatorDto,
  ) {
    try {
      const singleCoordinatorData = await this.coordinatorService.update(
        id,
        updateCoordinatorDto,
      );
      return singleCoordinatorData;
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST, err);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      const deletedCoordinator = await this.coordinatorService.remove(id);
      return deletedCoordinator;
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST, err);
    }
  }
}
