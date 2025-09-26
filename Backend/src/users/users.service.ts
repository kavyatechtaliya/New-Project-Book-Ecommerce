import { Injectable, ConflictException,NotFoundException} from "@nestjs/common";
import { User } from './users.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userModel: typeof User) {}

  async create(dto: CreateUserDto) {
    const existing = await this.userModel.findOne({ where: { email: dto.email } });
    if (existing) throw new ConflictException('Email already in use');
    const user = await this.userModel.create(dto as any);
    const { password, ...rest } = user.get({ plain: true });
    return rest;
  }
  
  async findByEmail(email:string){
    const user = this.userModel.findOne({ where: {email } })
    return user;
  }

  async findById(id:number){
    const user = this.userModel.findByPk(id)
    if(!user) throw new NotFoundException('user not found')
    return user
  }
}
