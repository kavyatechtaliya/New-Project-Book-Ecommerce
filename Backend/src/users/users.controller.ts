import {Controller,Post,Body} from '@nestjs/common';
import {CreateUserDto} from './dto/create-user.dto';
import {UsersService} from './users.service';

@Controller('user')
export class UserController{
    constructor(private usersService:UsersService){}
     @Post ('register')
    async register(@Body() dto: CreateUserDto) {
        return this.usersService.create(dto);
    }
}

   
