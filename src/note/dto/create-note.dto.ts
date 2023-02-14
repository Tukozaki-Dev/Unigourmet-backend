import { IsString, IsDateString } from "class-validator";

export class CreateNoteDto {

    @IsString()
    id: string;

    @IsString()
    createdAt: string;
    
    @IsString()
    subject: string;

    @IsString()
    region: string;

    @IsString()
    professor: string;

    @IsString()
    note: string;
}
