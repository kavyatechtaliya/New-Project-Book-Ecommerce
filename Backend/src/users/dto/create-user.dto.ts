import {IsEmail,IsNotEmpty,MinLength,IsOptional,IsIn} from 'class-validator'

export class CreateUserDto{
    @IsEmail()
    email:string;

    @IsNotEmpty()
    @MinLength(6)
    password:string;

    @IsOptional()
    @IsIn(['admin', 'user'])
    role? : 'admin' | 'user';
}