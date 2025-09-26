import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { BooksController } from './book.controller';
import { Bookservice } from './book.service';
import { Books } from './book.model';

@Module({
  imports: [SequelizeModule.forFeature([Books])],
  controllers: [BooksController],
  providers: [Bookservice],
  exports: [Bookservice],
})
export class BookModule  {}
