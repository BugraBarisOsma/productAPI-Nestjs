import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductModel } from 'src/models/product.model';
import { Product, ProductDocument } from 'src/models/product.schema';
import { ProductService } from 'src/services/product.service';

@Controller('product')
export class ProductController {
  constructor(
    private readonly productService: ProductService,
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}

  @Post()
  async create(@Body() product: ProductDocument): Promise<Product> {
    return await this.productService.create(product);
  }
  @Get(':id')
  async find(@Body() product: Product): Promise<Product> {
    return await this.productService.find(product);
  }
  @Get()
  async findAll(): Promise<Product[]> {
    return await this.productService.findAll();
  }
  @Patch(':id')
  async update(@Body() product: Product): Promise<Product> {
    return this.productService.update(product.id);
  }
  @Delete(':id')
  async delete(@Body() product: Product): Promise<Product> {
    return this.productService.delete(product.id);
  }
}
