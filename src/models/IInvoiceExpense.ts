import ISupplier from "./ISupplier";
import CoinType from "../enums/coinType";

export default interface IInvoiceExpense{
    id?: number;
    companyId: number;
    supplier:ISupplier;
    sn:string;
    date:Date;
    coin:CoinType;
    price:number;
    sortCode:string;//???????
    comments:string;
}