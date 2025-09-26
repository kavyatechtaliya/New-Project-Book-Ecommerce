import { Injectable, NotFoundException, BadRequestException } from "@nestjs/common";
import { Cart } from './cart.model';
import { InjectModel } from '@nestjs/sequelize';
import { Books } from "src/book/book.model";
import { CreateCartDto } from "./dto/create-cart.dto";
import { RemoveCartDto } from "./dto/remove-cart.dto";


@Injectable()
export class CartService {
  constructor(
    @InjectModel(Cart) private cartModel: typeof Cart,
    @InjectModel(Books) private bookModel: typeof Books
  ) { }


  async addtoCart(userId: number, dto: CreateCartDto) {
    const book = await this.bookModel.findByPk(dto.bookId)
    if (!book) throw new NotFoundException("Book not found")

    if (book.stock <= 0) {
      throw new BadRequestException("OutOfStock")
    }

    if (book.stock < dto.qty) {
      throw new BadRequestException(
        `book ${book.stock} item available in stock`
      )
    }

    const existing = await this.cartModel.findOne({ where: { userId, bookId: dto.bookId } })

    if (existing) {
      if (book.stock < existing.quantity + dto.qty) {
        throw new BadRequestException(`book ${book.stock} item available in stock`)
      }
      existing.quantity += dto.qty;
      await existing.save()
    }
    else {
      await this.cartModel.create({
        userId, bookId: dto.bookId,
        quantity: dto.qty
      })
    }

    book.stock -= dto.qty
    await book.save()
    return { message: 'Book added to the cart', remaining_stock: book.stock }
  }

  async removefromCart(userId: number, dto: RemoveCartDto) {
    const CartItem = await this.cartModel.findOne({ where: { userId, bookId: dto.bookId } })

     const book = await this.bookModel.findByPk(dto.bookId)
     if(!book){
       throw new NotFoundException("Book not found")
     }

    console.log(CartItem)
    if (!CartItem) {
      throw new NotFoundException("Book not found in cart")
    }

    if(CartItem.quantity>1){
      CartItem.quantity -= 1;
      await CartItem.save();
      book.stock+=1
      await book.save()
      return{message:"One item removed from the Cart",remaining_stock: CartItem.quantity}
    }
      await CartItem.destroy()
      book.stock+=1
      await book.save()
      return{message:"The cart is empty"}
    
  }

}


