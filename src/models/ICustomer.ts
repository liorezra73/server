import IAddress from "./IAddress";

export default interface ICustomer {
    id?:number;
    invoiceIncomeId?: number;
    firstName: string;
    lastName: string;
    email: string;
    address: IAddress;
    phone: string;
    sn: string;
}
