import { Type } from "class-transformer";
import { IsInt, IsOptional } from "class-validator";

export class PaginationParams {

    @IsOptional()
    @IsInt()
    @Type(() => Number)
    page: number;

}