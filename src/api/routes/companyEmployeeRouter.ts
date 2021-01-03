import express from "express";
import { createValidator } from "express-joi-validation";
import {
  companyEmployeeSchema,
  companyEmployeeDetailsSchema,
} from "../../validations/companyEmployeeSchema";
import companyEmployeeController from "../controllers/CompanyEmployeeController";

const companyEmployeeRouter = express.Router({ mergeParams: true });
const validator = createValidator();

companyEmployeeRouter.post(
  "/",
  validator.body(companyEmployeeSchema),
  companyEmployeeController.createCompanyEmployee
);

companyEmployeeRouter.put(
  "/:companyEmployeeId",
  validator.body(companyEmployeeDetailsSchema),
  companyEmployeeController.editCompanyEmployee
);

companyEmployeeRouter.delete(
  "/:companyEmployeeId",
  companyEmployeeController.deleteCompanyEmployee
);
companyEmployeeRouter.get(
  "/:companyEmployeeId",
  companyEmployeeController.getCompanyEmployeeById
);
companyEmployeeRouter.get(
  "/",
  companyEmployeeController.getCompanyEmployees
);

export default companyEmployeeRouter;
