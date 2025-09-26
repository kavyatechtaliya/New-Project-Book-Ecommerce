import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CartController } from './cart.controller';
import { CartService } from './cart.service';
import { Cart } from './cart.model';
import { Books } from 'src/book/book.model';

@Module({
  imports: [SequelizeModule.forFeature([Cart,Books ])],
  controllers: [CartController],
  providers: [CartService],
  exports: [CartService],
})
export class CartModule{}
