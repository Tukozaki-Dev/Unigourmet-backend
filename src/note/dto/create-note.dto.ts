import { Type } from "class-transformer";
import { IsString, IsObject, ValidateNested, IsMongoId, Matches } from "class-validator";

export class Course {
    @IsMongoId()
    @IsString()
    _id: string;
  
    @IsString()
    @Matches(/^[A-Za-z]+$/)
    name: string;
}

  export class Professor {
    @IsMongoId()
    @IsString()
    _id: string;
  
    @IsString()
    @Matches(/^[A-Za-z]+$/)
    name: string;
}

export class CreateNoteDto {
    
    @IsObject()
    @ValidateNested()
    @Type(() => Course)
    course: Course;

    @IsString()
    region: string;

    @IsObject()
    @ValidateNested()
    @Type(() => Professor)
    professor: Professor;

    @IsString()
    note: string;
}
