import { Type } from "class-transformer";
import { IsString, ValidateNested, IsMongoId, Matches, IsEmail, IsPhoneNumber, IsStrongPassword, IsArray } from "class-validator";

export class CourseListing {
    @IsMongoId()
    @IsString()
    _id: string;
  
    @IsString()
    @Matches(/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/)
    name: string;
}

  export class ClassGroups {
    @IsMongoId()
    @IsString()
    _id: string;
  
    @IsString()
    @Matches(/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/)
    name: string;
}

export class CreateNoteDto {
    @IsString()
    @Matches(/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/)
    name: string;

    @IsString()
    registerCode: string;

    @IsString()
    @IsEmail()
    email: string;

    @IsString()
    @IsStrongPassword()
    password: string;

    @IsString()
    @IsPhoneNumber()
    phone: string;

    @IsString()
    imagePath: string;

    @IsArray()
    @ValidateNested({
        each: true,
    })
    @Type(() => String)
    specialties:String[];

    @IsArray()
    @ValidateNested({
        each: true,
    })
    @Type(() => CourseListing)
    courseListing:CourseListing[];

    @IsArray()
    @ValidateNested({
        each: true,
    })
    @Type(() => ClassGroups)
    classGroups:ClassGroups[];

}
