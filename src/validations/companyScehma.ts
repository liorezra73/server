import * as Joi from "joi";
import { ContainerTypes, ValidatedRequestSchema } from "express-joi-validation";
import { addresSchema, IAddressRequest } from "./addressSchema";
import {
  ICompanyEmployeeRequest,
  companyEmployeeSchema,
} from "./companyEmployeeSchema";

export const companyDetailsSchema: Joi.ObjectSchema<any> = Joi.object({
  name: Joi.string().min(2).max(100).required(),
  address: addresSchema,
  sn: Joi.string().min(5).max(9).required(),
  companyType: Joi.number().valid(0, 1, 2, 3, 4).required(),
  mainPhone: Joi.string().min(9).max(10).required(),
}).required();

interface ICompanyDetailRequest {
  name: string;
  address: IAddressRequest;
  sn: string;
  companyType: number;
  mainPhone: string;
}

export interface CompanyDetailRequestSchema extends ValidatedRequestSchema {
  [ContainerTypes.Body]: ICompanyDetailRequest;
}

export const CompanyFullSchema: Joi.ObjectSchema<any> = Joi.object({
  details: companyDetailsSchema,
  employee: companyEmployeeSchema,
});

export interface CompanyFullRequestSchema extends ValidatedRequestSchema {
  [ContainerTypes.Body]: {
    details: ICompanyDetailRequest;
    employee: ICompanyEmployeeRequest;
  };
}
