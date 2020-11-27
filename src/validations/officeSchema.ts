import * as Joi from "joi";
import { ContainerTypes, ValidatedRequestSchema } from "express-joi-validation";
import { addresSchema, IAddressRequest } from "./addressSchema";
import {
  officeEmployeeSchema,
  IOfficeEmployeeRequest,
} from "./officeEmployeeSchema";

export const officeDetailsSchema: Joi.ObjectSchema<any> = Joi.object({
  name: Joi.string().min(2).max(100).required(),
  address: addresSchema,
  sn: Joi.string().min(4).max(100).required(),
});

interface IOfficeDetailRequest {
  name: string;
  address: IAddressRequest;
  sn: string;
}

export interface OfficeDetailRequestSchema extends ValidatedRequestSchema {
  [ContainerTypes.Body]: IOfficeDetailRequest;
}

export const officeLimitsSchema: Joi.ObjectSchema<any> = Joi.object({
  maxCompanies: Joi.number().min(0).required(),
  maxEmployees: Joi.number().min(1).required(),
  expiryDate: Joi.number().valid(1, 3, 6, 12).required(),
  isActive: Joi.boolean().required(),
}).required();

export interface OfficeLimitsRequestSchema extends ValidatedRequestSchema {
  [ContainerTypes.Body]: {
    maxCompanies: number;
    maxEmployees: number;
    expiryDate: number;
    isActive: boolean;
  };
}

export const officeFullSchema: Joi.ObjectSchema<any> = Joi.object({
  details: officeDetailsSchema,
  limits: officeLimitsSchema,
  employee: officeEmployeeSchema,
});

export interface OfficeFullRequestSchema extends ValidatedRequestSchema {
  [ContainerTypes.Body]: {
    details: IOfficeDetailRequest;
    limits: {
      maxCompanies: number;
      maxEmployees: number;
      expiryDate: number;
      isActive: boolean;
    };
    employee: IOfficeEmployeeRequest;
  };
}
