import { Type } from "class-transformer";
import { IsInt } from "class-validator";

export class ReadNoteDto {

    @IsInt()
    @Type(() => Number)
    page: number;

}