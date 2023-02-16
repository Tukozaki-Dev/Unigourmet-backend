import { PartialType } from '@nestjs/mapped-types';
import {
  IsOptional,
  IsString,
  Matches,
  IsEmail,
  Length,
  IsNumber,
} from 'class-validator';
import { CreateCoordinatorDto } from './create-coordinator.dto';

export class UpdateCoordinatorDto extends PartialType(CreateCoordinatorDto) {
  @IsOptional()
  @IsString()
  @Matches(/^[A-Za-z]+$/)
  name: string;

  @IsOptional()
  @IsEmail()
  @IsString()
  email: string;

  @IsOptional()
  @Length(10, 11)
  @IsNumber()
  phone: number;

  @IsOptional()
  @IsString()
  @Length(8, 20)
  password: string;

  @IsOptional()
  @IsString()
  imagePath: string;
}
