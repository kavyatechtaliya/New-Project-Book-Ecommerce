import {IsNotEmpty,IsInt} from 'class-validator'

export class RemoveCartDto{

    @IsNotEmpty()
    @IsInt()
    bookId:number;
}