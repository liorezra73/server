import CoinType from "../enums/CoinType";
import InvoiceStatus from "../enums/InvoiceStatus";

export default interface IInvoice {
  comments: string;
  coin: CoinType;
  ReferenceDate: Date;
  status: InvoiceStatus;
}


