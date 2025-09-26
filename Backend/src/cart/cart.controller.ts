    import {Controller,Post,Body,UseGuards, Request, Delete} from '@nestjs/common';
    import {CartService} from './cart.service';
    import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
    import { CreateCartDto } from './dto/create-cart.dto';
import { RemoveCartDto } from './dto/remove-cart.dto';


    @Controller('cart')
    export class CartController{
        constructor(private cartService:CartService){}

        @UseGuards(JwtAuthGuard)
        @Post ('add')
        async addtoCart(@Request() req, @Body() dto: CreateCartDto) {
            const UserId = req.user.userId;
            return this.cartService.addtoCart(UserId,dto);
        }

        @UseGuards(JwtAuthGuard)
        @Delete("remove")
        async removefromCart(@Request() req,@Body() dto:RemoveCartDto){
            const UserId = req.user.userId;
            return this.cartService.removefromCart(UserId,dto);
        }
        
    }
