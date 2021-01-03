import * as Joi from "joi";
import { ContainerTypes, ValidatedRequestSchema } from "express-joi-validation";
import { userSchema, IUserRequest } from "./userSchema";
import { employeeDetailsSchema, IEmployeeDetailsRequest } from "./employeeSchema";

export const officeEmployeeDetailsSchema: Joi.ObjectSchema<any> = employeeDetailsSchema.keys({
  employeeType: Joi.number().valid(0, 1).required(),
})

export interface IOfficeEmployeeDetailsRequest extends IEmployeeDetailsRequest {
  employeeType: number;
}

export interface OfficeEmployeeDetailsRequestSchema
  extends ValidatedRequestSchema {
  [ContainerTypes.Body]: IOfficeEmployeeDetailsRequest;
}

export const officeEmployeeSchema: Joi.ObjectSchema<any> = Joi.object({
  details: officeEmployeeDetailsSchema,
  user: userSchema,
}).required();

export interface IOfficeEmployeeRequest {
  details: IOfficeEmployeeDetailsRequest;
  user: IUserRequest;
}

export interface OfficeEmployeeRequestSchema extends ValidatedRequestSchema {
  [ContainerTypes.Body]: IOfficeEmployeeRequest;
}
