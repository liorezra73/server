import PaymentMethod from "../enums/PaymentMethod";

export default interface IPayment {
    id?:number;
    invoiceIncomeId?:number;
    paymentMethod?: PaymentMethod;
    paymentDate: Date;
    sum: number;
}
