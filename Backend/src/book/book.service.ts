import { Injectable ,NotFoundException } from "@nestjs/common";
import { Books } from "./book.model";
import { InjectModel } from "@nestjs/sequelize";
import { CreateBookDto } from "./dto/create-book.dto";

@Injectable()
export class Bookservice{
    constructor(@InjectModel(Books) private bookModel: typeof Books) {}

    create(dto:CreateBookDto){
        return this.bookModel.create(dto as any)
    }

    findAll(){
        return this.bookModel.findAll()
    }

    async findOne(id:number){
        const Book = await this.bookModel.findByPk(id)
        if(!Book) throw new NotFoundException()
            return Book;
    }

    async update(id: number,dto:Partial<CreateBookDto>){
        const book = await this.findOne(id)
        return book.update(dto)
    }

    async remove(id:number){
        const book = await this.findOne(id)
        return book.destroy()
    }


}