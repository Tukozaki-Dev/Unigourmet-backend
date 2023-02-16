/* eslint-disable prettier/prettier */
import { Type } from 'class-transformer';
import { IsString, IsNumber, ValidateNested, IsArray, IsNotEmpty, MaxLength, Matches, IsMongoId } from 'class-validator';


export class Disciplines {
  @IsNotEmpty()
  @IsString()
  @IsMongoId()
  _id: string;

  @IsNotEmpty()
  @IsString()
  @Matches(/^[A-Za-z]+$/)
  name: string;
}

export class Students {
  @IsNotEmpty()
  @IsString()
  @IsMongoId()
  _id: string;

  @IsNotEmpty()
  @IsString()
  @Matches(/^[A-Za-z]+$/)
  name: string;
}



export class CreateClassGroupDto {
  @IsNotEmpty()
  @IsString()
  @Matches(/^[A-Za-z]+$/)
  name: string;

  @IsNotEmpty()
  @IsString()
  @Matches(/^[A-Za-z0-9]*$/)
  registerCode: string;

  @IsNotEmpty()
  @IsNumber()
  @MaxLength(2)
  semester: number;

  @IsNotEmpty()
  @IsString()
  @Matches(/^[A-Za-z]+$/)
  shift: string;

  @IsNotEmpty()
  @IsString()
  @Matches(/^[A-Za-z]+$/)
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

