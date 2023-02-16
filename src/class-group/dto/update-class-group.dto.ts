import { PartialType } from '@nestjs/mapped-types';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsNumber,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  ValidateNested,
} from 'class-validator';
import { CreateClassGroupDto } from './create-class-group.dto';

export class Disciplines {
  @IsOptional()
  @IsString()
  _id: string;

  @IsOptional()
  @IsString()
  @Matches(/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/)
  name: string;
}

export class Students {
  @IsOptional()
  @IsString()
  _id: string;

  @IsOptional()
  @IsString()
  @Matches(/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/)
  name: string;
}

export class UpdateClassGroupDto extends PartialType(CreateClassGroupDto) {
  @IsOptional()
  @IsString()
  @Matches(/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/)
  name: string;

  @IsOptional()
  @IsString()
  @Matches(/^[\w'\-,.][^_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/)
  registerCode: string;

  @IsOptional()
  @IsNumber()
  @MaxLength(2)
  semester: number;

  @IsOptional()
  @IsString()
  @Matches(/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/)
  shift: string;

  @IsOptional()
  @IsString()
  @Matches(/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/)
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
