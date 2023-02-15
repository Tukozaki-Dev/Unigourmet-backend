import { PartialType } from '@nestjs/mapped-types';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { CreateClassGroupDto } from './create-class-group.dto';

export class Disciplines {
  @IsOptional()
  @IsString()
  _id: string;

  @IsOptional()
  @IsString()
  name: string;
}

export class Students {
  @IsOptional()
  @IsString()
  _id: string;

  @IsOptional()
  @IsString()
  name: string;
}

export class UpdateClassGroupDto extends PartialType(CreateClassGroupDto) {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  registerCode: string;

  @IsOptional()
  @IsNumber()
  semester: number;

  @IsOptional()
  @IsString()
  shift: string;

  @IsOptional()
  @IsString()
  category: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({
    each: true,
  })
  @Type(() => Disciplines)
  disciplines: Disciplines[];

  @IsOptional()
  @IsArray()
  @Type(() => Students)
  @ValidateNested()
  students: Students[];
}
