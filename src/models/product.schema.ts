import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { ProductEnums } from "src/enums/ProductEnums";


export type ProductDocument = Product & Document

@Schema({timestamps:true})
export class Product{
  @Prop()
  id:string

  @Prop()
  name:string

  @Prop()
  fromAddress:string

  @Prop()
  toAddress:string

  @Prop()
  price:number

  @Prop()
  status:ProductEnums.CREATED



}
export const ProductSchema =  SchemaFactory.createForClass(Product)