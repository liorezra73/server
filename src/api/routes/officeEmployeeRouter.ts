import express from "express";
import { createValidator } from "express-joi-validation";
import { officeEmployeeSchema } from "../../validations/officeEmployeeSchema";
import officeEmployeeController from "../controllers/OfficeEmployeeController";

const officeEmployeeRouter = express.Router({ mergeParams: true });
const validator = createValidator();

officeEmployeeRouter.post(
  "/",
  validator.body(officeEmployeeSchema),
  officeEmployeeController.createOfficeEmployee
);

export default officeEmployeeRouter;
