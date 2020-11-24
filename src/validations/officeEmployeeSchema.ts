import * as Joi from "joi";
import { ContainerTypes, ValidatedRequestSchema } from "express-joi-validation";
import { userSchema, IUserRequest } from "./userSchema";

export const officeEmployeeSchema: Joi.ObjectSchema<any> = Joi.object({
  firstName: Joi.string().min(2).max(100).required(),
  lastName: Joi.string().min(2).max(100).required(),
  user: userSchema,
}).required();

export interface IOfficeEmployeeRequest{
    firstName: string;
    lastName: string;
    user: IUserRequest;
}

export interface OfficeEmployeeRequestSchema extends ValidatedRequestSchema {
  [ContainerTypes.Body]: IOfficeEmployeeRequest
}
