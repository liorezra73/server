import * as Joi from "joi";
import { ContainerTypes, ValidatedRequestSchema } from "express-joi-validation";
import { itemSchema, IItemSchema } from "./itemSchema";

export const paymentSchema: Joi.ObjectSchema = Joi.object({
  paymentMethod: Joi.number().valid(0, 1, 2, 3, 4, 5).required(),
  sum: Joi.number().min(0).required(),
});

export interface IPaymentSchema {
  paymentMethod: number;
  sum: number;
}

export const invoiceIncomeSchema: Joi.ObjectSchema = Joi.object({
  documentType: Joi.number().valid(0, 1, 2, 3, 4, 5).required(),
  documentLanguage: Joi.number().valid(0, 1).required(),
  includeVAT: Joi.boolean().required(),
  //  totalSum: Joi.number().min(0).required(),
  items: Joi.array().required().items(itemSchema).required(), //?
  payments: Joi.array().required().items(paymentSchema).required(),
}).required();

export interface InvoiceIncomeSchema {
  documentType: number;
  documentLanguage: number;
  includeVAT: boolean;
  // totalSum: number;
  items: IItemSchema[];
  payments: IPaymentSchema[];
}

export interface InvoiceIncomeDetailsRequestSchema
  extends ValidatedRequestSchema {
  [ContainerTypes.Body]: InvoiceIncomeSchema;
}

export const invoiceIncomeFullSchema: Joi.ObjectSchema = Joi.object({
  invoiceIncome: invoiceIncomeSchema,
  status: Joi.number().valid(0, 1, 2).required(),
}).required();

export interface InvoiceIncomeRequestSchema extends ValidatedRequestSchema {
  [ContainerTypes.Body]: {
    status: number;
    invoiceIncome: InvoiceIncomeSchema;
  };
}
