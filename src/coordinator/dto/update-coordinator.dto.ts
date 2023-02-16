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
  @Matches(/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/)
  name: string;

  @IsOptional()
  @IsEmail()
  @IsString()
  email: string;

  @IsOptional()
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
