import { ProductEnums } from "src/enums/ProductEnums";

export class ProductModel{
    id:string;
    name:string;
    fromAddress:string;
    toAddress:string;
    price:number;
    status:ProductEnums.CREATED;
}