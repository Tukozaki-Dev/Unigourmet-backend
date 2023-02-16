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
  @Matches(/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/)
  name: string;
}

export class Students {
  @IsNotEmpty()
  @IsString()
  @IsMongoId()
  _id: string;

  @IsNotEmpty()
  @IsString()
  @Matches(/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/)
  name: string;
}



export class CreateClassGroupDto {
  @IsNotEmpty()
  @IsString()
  @Matches(/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/)
  name: string;

  @IsNotEmpty()
  @IsString()
  @Matches(/^[\w'\-,.][^_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/)
  registerCode: string;

  @IsNotEmpty()
  @IsNumber()
  @MaxLength(2)
  semester: number;

  @IsNotEmpty()
  @IsString()
  @Matches(/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/)
  shift: string;

  @IsNotEmpty()
  @IsString()
  @Matches(/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/)
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

