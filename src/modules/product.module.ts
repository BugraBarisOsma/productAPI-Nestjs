import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductController } from 'src/controllers/product.controller';
import { Product, ProductSchema } from 'src/models/product.schema';
import { ProductService } from 'src/services/product.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
  ],
  controllers:[ProductController],
  providers:[ProductService]
})
export class ProductModule {}
