import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { ValidationPipe } from '@nestjs/common'
dotenv.config()
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({whitelist:true,forbidNonWhitelisted:true, transform: true }))

   app.enableCors({
    origin: 'http://localhost:3000', // your frontend origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true, // if you want to send cookies/auth headers
  });
  
  await app.listen(3001);
  console.log('Backend running on http://localhost:3000')
   
}
bootstrap();