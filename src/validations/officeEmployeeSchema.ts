import * as Joi from "joi";
import { ContainerTypes, ValidatedRequestSchema } from "express-joi-validation";
import { userSchema, IUserRequest } from "./userSchema";

export const officeEmployeeDetailsSchema: Joi.ObjectSchema<any> = Joi.object({
  firstName: Joi.string().min(2).max(100).required(),
  lastName: Joi.string().min(2).max(100).required(),
  employeeType: Joi.number().valid(0, 1).required(),
}).required();

export interface IOfficeEmployeeDetailsRequest {
  firstName: string;
  lastName: string;
  employeeType: number;
}

export interface OfficeEmployeeDetailsRequestSchema extends ValidatedRequestSchema {
  [ContainerTypes.Body]: IOfficeEmployeeDetailsRequest;
}


export const officeEmployeeSchema: Joi.ObjectSchema<any> = Joi.object({
  details:officeEmployeeDetailsSchema,
  user: userSchema,
}).required();

export interface IOfficeEmployeeRequest {
  details: IOfficeEmployeeDetailsRequest;
  user: IUserRequest;
}

export interface OfficeEmployeeRequestSchema extends ValidatedRequestSchema {
  [ContainerTypes.Body]: IOfficeEmployeeRequest;
}
