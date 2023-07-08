import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { ServiceInterface } from 'src/interfaces/service.interface';
import { ProductModel } from 'src/models/product.model';
import { Product, ProductDocument } from 'src/models/product.schema';

@Injectable()
export class ProductService implements ServiceInterface {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}

  create(body: ProductDocument): Promise<Product> {
    return this.productModel.create({
      id: body.id,
      name: body.name,
      fromAddress: body.fromAddress,
      toAddress: body.toAddress,
      price: body.price,
      status: body.status,
    });
  }
  findAll(): Promise<Product[]> {
    return this.productModel.find({});
  }
  find(productFilterQuery: FilterQuery<Product>): Promise<Product> {
    return this.productModel.findOne(productFilterQuery);
  }
  delete(id: string): Promise<Product> {
    return this.productModel.findByIdAndDelete({ id });
  }
  update(id: string): Promise<Product> {
    return this.productModel.findByIdAndUpdate({ id });
  }
}
