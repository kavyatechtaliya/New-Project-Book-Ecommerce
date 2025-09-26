import {IsNotEmpty,Min} from 'class-validator'

export class CreateCartDto{

    @IsNotEmpty()
    bookId:number;

    @IsNotEmpty()
    @Min(1)
    qty:number
}