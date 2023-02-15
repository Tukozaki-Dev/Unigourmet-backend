/* eslint-disable prettier/prettier */
import { Type } from 'class-transformer';
import { IsString, IsNumber, ValidateNested, IsArray } from 'class-validator';


export class Disciplines {
  @IsString()
  _id: string;

  @IsString()
  name: string;
}

export class Students {
  @IsString()
  _id: string;

  @IsString()
  name: string;
}



export class CreateClassGroupDto {
  @IsString()
  name: string;

  @IsString()
  registerCode: string;

  @IsNumber()
  semester: number;

  @IsString()
  shift: string;

  @IsString()
  category: string;

  @IsArray()
  @ValidateNested({
    each: true,
  })
  @Type(() => Disciplines)
  disciplines:Disciplines[];

  @IsArray()
  @Type(() => Students)
  @ValidateNested()
  students:Students[];
}

