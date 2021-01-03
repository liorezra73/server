import * as Joi from "joi";
import { ContainerTypes, ValidatedRequestSchema } from "express-joi-validation";

export const itemSchema: Joi.ObjectSchema = Joi.object({
  catalogNumber: Joi.string().min(2).max(200).required(),
  description: Joi.string().max(400).required(),
  quantity: Joi.number().min(1).required(),
  price: Joi.number().min(0).required(),
  vat: Joi.number().min(0).max(100).required(),
});

export interface IItemSchema {
  catalogNumber: string;
  description: string;
  quantity: number;
  price: number;
  vat: number;
}

export interface ItemRequestSchema extends ValidatedRequestSchema {
    [ContainerTypes.Body]: IItemSchema;
  }