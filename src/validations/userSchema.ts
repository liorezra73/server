import * as Joi from "joi";
import { ContainerTypes, ValidatedRequestSchema } from "express-joi-validation";

export const userSchema: Joi.ObjectSchema<any> = Joi.object({
  username: Joi.string().min(4).max(100).required(),
  email: Joi.string().email().min(4).max(100).required(),
  phone: Joi.string().min(10).max(10).required(),
  password: Joi.string().min(4).max(100).required(),
  passwordRepeted: Joi.ref("password"),
})
  .with("password", "passwordRepeted")
  .required();

export interface IUserRequest {
  username: string;
  email: string;
  phone: string;
  password: string;
  passwordRepeted: string;
}

export interface UserRequestSchema extends ValidatedRequestSchema {
  [ContainerTypes.Body]: IUserRequest;
}
