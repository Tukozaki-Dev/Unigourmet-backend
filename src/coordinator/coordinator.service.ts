import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { isValidObjectId } from 'mongoose';
import { CoordinatorRepository } from './coordinator.repository';
import { CreateCoordinatorDto } from './dto/create-coordinator.dto';
import { UpdateCoordinatorDto } from './dto/update-coordinator.dto';

@Injectable()
export class CoordinatorService {
  constructor(private readonly coordinatorRepository: CoordinatorRepository) {}

  async create(createCoordinatorDto: CreateCoordinatorDto) {
    const createdCoordinator = await this.coordinatorRepository.create(
      createCoordinatorDto,
    );
    return createdCoordinator;
  }

  async findAll(page: number) {
    const coordinatorData = await this.coordinatorRepository.findAll(page);
    return coordinatorData;
  }

  async findOne(id: string) {
    if (!isValidObjectId(id)) {
      throw new HttpException('ID inválido', HttpStatus.BAD_REQUEST);
    }
    try {
      const singleCoordinatorData = await this.coordinatorRepository.findOne(
        id,
      );

      if (!singleCoordinatorData) {
        throw new HttpException(`Coordenador ${id} não encontrado`, 204);
      }

      return singleCoordinatorData;
    } catch (err) {
      throw new HttpException(err.message, err.status);
    }
  }

  async update(id: string, updateCoordinatorDto: UpdateCoordinatorDto) {
    if (!isValidObjectId(id)) {
      throw new HttpException('ID inválido', HttpStatus.BAD_REQUEST);
    }
    try {
      const singleCoordinatorData = await this.coordinatorRepository.update(
        id,
        updateCoordinatorDto,
      );

      if (!singleCoordinatorData) {
        throw new HttpException(`Coordenador ${id} não encontrado`, 204);
      }

      return singleCoordinatorData;
    } catch (err) {
      throw new HttpException(err.message, err.status);
    }
  }

  async remove(id: string) {
    if (!isValidObjectId(id)) {
      throw new HttpException('ID inválido', HttpStatus.BAD_REQUEST);
    }
    try {
      const deletedCoordinator = await this.coordinatorRepository.remove(id);

      if (!deletedCoordinator) {
        throw new HttpException(`Coordenador ${id} não encontrado`, 204);
      }

      return deletedCoordinator;
    } catch (err) {
      throw new HttpException(err.message, err.status);
    }
  }
}
