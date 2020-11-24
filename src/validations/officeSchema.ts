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

export const officeMaxCompaniesSchema = Joi.number().min(0).required();

export interface OfficeMaxCompaniesRequestSchema
  extends ValidatedRequestSchema {
  [ContainerTypes.Body]: number;
}

export const officeMaxEmployeesSchema = Joi.number().min(1).required();
export interface OfficeMaxEmployeesRequestSchema
  extends ValidatedRequestSchema {
  [ContainerTypes.Body]: number;
}

export const officeExpiryDateSchema = Joi.number()
  .valid(1, 3, 6, 12)
  .required();
export interface OfficeExpiryDateRequestSchema extends ValidatedRequestSchema {
  [ContainerTypes.Body]: number;
}

export const officeFullSchema: Joi.ObjectSchema<any> = Joi.object({
  details: officeDetailsSchema,
  maxCompanies: officeMaxCompaniesSchema,
  maxEmployees: officeMaxEmployeesSchema,
  expiryDate: officeExpiryDateSchema,
  employee: officeEmployeeSchema,
});

export interface OfficeFullRequestSchema extends ValidatedRequestSchema {
  [ContainerTypes.Body]: {
    details: IOfficeDetailRequest;
    maxCompanies: number;
    maxEmployees: number;
    expiryDate: number;
    employee: IOfficeEmployeeRequest;
  };
}
