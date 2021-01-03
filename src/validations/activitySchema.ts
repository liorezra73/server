import * as Joi from "joi";
import { ContainerTypes, ValidatedRequestSchema } from "express-joi-validation";

export const activitySchema: Joi.ObjectSchema<any> = Joi.object({
  isActive: Joi.boolean().required(),
}).required();

export interface ActivityRequestSchema extends ValidatedRequestSchema {
  [ContainerTypes.Body]: {
    isActive: boolean;
  };
}
