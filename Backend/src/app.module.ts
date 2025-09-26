import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';
import { User } from './users/users.model';
import { AuthModule } from './auth/auth.module';
import { Books } from './book/book.model';
import { BookModule } from './book/book.module';
import { Cart } from './cart/cart.model';
import { CartModule } from './cart/cart.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Password',
      database: 'bookstore',
      models: [User,Books,Cart],
      autoLoadModels: true,
      synchronize: true,
    }),
    UsersModule,
    AuthModule,
    BookModule,
    CartModule
  ],
})
export class AppModule {}
