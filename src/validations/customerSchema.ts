import * as Joi from "joi";
import { ContainerTypes, ValidatedRequestSchema } from "express-joi-validation";
import { addresSchema, IAddressRequest } from "./addressSchema";

export const customerSchema: Joi.ObjectSchema = Joi.object({
  firstName: Joi.string().min(2).max(20).required(),
  lastName: Joi.string().min(2).max(20).required(),
  email: Joi.string().email().required(),
  address: addresSchema,
  phone: Joi.string().min(10).max(10).required(),
  sn: Joi.string().min(5).max(9).required(),
}).required();


export interface ICustomerSchema {
    firstName:string;
    lastName:string;
    email:string;
    address:IAddressRequest;
    phone: string;
    sn: string;
}

export interface CustomerRequestSchema extends ValidatedRequestSchema {
    [ContainerTypes.Body]: ICustomerSchema;
  }