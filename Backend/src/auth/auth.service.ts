import {Injectable} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService{
    constructor(private usersService: UsersService, private jwtService:JwtService){}

    async validator(email:string,pass:string){
        const user = await this.usersService.findByEmail(email)
        if(!user){
            return null;
        }
        const valid = await user.validatePassword(pass)
        if(!valid){
            return null;
        }

        const{password , ...rest} = user.get({plain:true})
        return rest;
    }

    async login(user:any){
        const payload = {sub : user.id,email: user.email,role:user.role};
        return{
            access_token:this.jwtService.sign(payload)
        }
    }
}