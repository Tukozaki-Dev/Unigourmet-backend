import { Type } from "class-transformer";
import { IsString, IsObject, ValidateNested } from "class-validator";

export class Course {
    @IsString()
    _id: string;
  
    @IsString()
    name: string;
}

  export class Professor {
    @IsString()
    _id: string;
  
    @IsString()
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
