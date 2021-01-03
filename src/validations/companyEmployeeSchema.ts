import * as Joi from "joi";
import { ContainerTypes, ValidatedRequestSchema } from "express-joi-validation";
import { userSchema, IUserRequest } from "./userSchema";
import { employeeDetailsSchema, IEmployeeDetailsRequest } from "./employeeSchema";




export const companyEmployeeDetailsSchema: Joi.ObjectSchema<any> = employeeDetailsSchema;
  
export interface ICompanyEmployeeDetailsRequest extends IEmployeeDetailsRequest {
  }

  export interface CompanyEmployeeDetailsRequestSchema extends ValidatedRequestSchema {
    [ContainerTypes.Body]: ICompanyEmployeeDetailsRequest;
  }

  export const companyEmployeeSchema: Joi.ObjectSchema<any> = Joi.object({
    details: companyEmployeeDetailsSchema,
    user: userSchema,
  }).required();
  
  export interface ICompanyEmployeeRequest {
    details: ICompanyEmployeeDetailsRequest;
    user: IUserRequest;
  }
  
  export interface CompanyEmployeeRequestSchema extends ValidatedRequestSchema {
    [ContainerTypes.Body]: ICompanyEmployeeRequest;
  }