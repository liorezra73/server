import * as Joi from "joi";

export const employeeDetailsSchema: Joi.ObjectSchema<any> = Joi.object({
  firstName: Joi.string().min(2).max(100).required(),
  lastName: Joi.string().min(2).max(100).required(),
}).required();

export interface IEmployeeDetailsRequest {
  firstName: string;
  lastName: string;
}

