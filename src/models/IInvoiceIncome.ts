import IInvoice from "./IInvoice";
import ICustomer from "./ICustomer";
import InvoiceIncomeDocumentType from "../enums/DocumentType";
import Language from "../enums/Language";
import IItem from "./IItem";
import IPayment from "./IPayment";

export default interface InvoiceIncome extends IInvoice {
  id?: number;
  companyId?: number;
  customerId?: number;
  //   customer: ICustomer;
  documentType: InvoiceIncomeDocumentType;
  documentLanguage: Language;
  includeVAT: boolean;
  items?: IItem[] | string;
  payments: IPayment[] | string;
  totalSum: number;
}
