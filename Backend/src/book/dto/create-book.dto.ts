import {IsNumber,IsOptional,IsString,Min,IsNotEmpty} from 'class-validator'

export class CreateBookDto{
    
    @IsString()
    @IsNotEmpty()
    title : string;

    @IsOptional()
    @IsString()
    author ?: string;

    @IsNumber()
    @Min(0)
    price : number;
    
    @IsOptional()
    @IsString()
    description ?: string;

    @IsNumber()
    @Min(0)
    stock : number;

    @IsOptional()
    @IsString()
    coverImage ?: string;
}

