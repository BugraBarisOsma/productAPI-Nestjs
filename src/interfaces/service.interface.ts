import { FilterQuery } from "mongoose";
import { ProductModel } from "src/models/product.model";
import { Product, ProductDocument } from "src/models/product.schema";

export interface ServiceInterface{
    create(body:ProductDocument):Promise<Product>;
    findAll(): Promise<Product[]>;
    find(productFilterQuery:FilterQuery<Product>):Promise<Product>
    delete(id:string): Promise<Product>
    update(id:string): Promise<Product>
}