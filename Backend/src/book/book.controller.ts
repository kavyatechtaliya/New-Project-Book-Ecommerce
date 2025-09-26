import { Controller, Get, Post, UseGuards,Body,Param,Patch,Delete} from '@nestjs/common';
import { Bookservice } from "./book.service";
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { Roles, RolesGuard } from 'src/auth/roles.decorator';
import { CreateBookDto } from './dto/create-book.dto';

@Controller('books')
export class BooksController{
    constructor(private booksService:Bookservice){}

    @Get()
    getAll(){
        return this.booksService.findAll()
    }
    
    @Get(':id')
    getOne(@Param('id') id : string){
        return this.booksService.findOne(Number(id))
    }

    @UseGuards(JwtAuthGuard,RolesGuard)
    @Roles('admin')
    @Post()
    create(@Body() dto:CreateBookDto){
        return this.booksService.create(dto)
    }

    @UseGuards(JwtAuthGuard,RolesGuard)
    @Roles('admin')
    @Patch(':id')
    update(@Param('id') id :string , @Body() dto :Partial<CreateBookDto>){
        return this.booksService.update(Number(id),dto)
    }
        
    @UseGuards(JwtAuthGuard,RolesGuard)
    @Roles('admin')
    @Delete(':id')
    remove(@Param('id') id:string){
        return this.booksService.remove(Number(id))
    }
}