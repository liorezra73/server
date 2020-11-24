import * as Joi from "joi";
import { ContainerTypes, ValidatedRequestSchema } from "express-joi-validation";

export const addresSchema: Joi.ObjectSchema<any> = Joi.object({
  city: Joi.string().min(4).max(100).required(),
  street: Joi.string().min(4).max(100).required(),
  number: Joi.string().min(1).max(10).required(),
}).required();

export interface IAddressRequest {
  city: string;
  street: string;
  number: string;
}

export interface AddressRequestSchema extends ValidatedRequestSchema {
  [ContainerTypes.Body]: IAddressRequest;
}
