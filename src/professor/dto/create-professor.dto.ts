import { Type } from "class-transformer";
import { IsString, ValidateNested, IsMongoId, Matches, IsEmail, IsPhoneNumber, IsStrongPassword, IsArray } from "class-validator";

export class CourseListing {
    @IsMongoId()
    _id: string;
  
    @IsString()
    @Matches(/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/)
    name: string;
}

export class ClassGroups {
    @IsMongoId()
    _id: string;
  
    @IsString()
    @Matches(/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/)
    name: string;
}

export class Specialties {
    @IsMongoId()
    _id: string;
  
    @IsString()
    @Matches(/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/)
    name: string;
}

export class CreateProfessorDto {
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
    phone: number;

    @IsString()
    imagePath: string;

    @IsArray()
    @ValidateNested({
        each: true,
    })
    @Type(() => Specialties)
    specialties:Specialties[];

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
