import express from "express";
import { createValidator } from "express-joi-validation";
import {
  CompanyFullSchema,
  companyDetailsSchema,
} from "../../validations/companyScehma";
import companyController from "../controllers/CompanyController";
import { activitySchema } from "../../validations/activitySchema";

const companyRouter = express.Router({ mergeParams: true });
const validator = createValidator();

companyRouter.post(
  "/",
  validator.body(CompanyFullSchema),
  companyController.createCompany
);
companyRouter.put(
  "/:companyId",
  validator.body(companyDetailsSchema),
  companyController.updateCompany
);
companyRouter.put(
  "/:companyId/activity",
  validator.body(activitySchema),
  companyController.updateCompanyActivity
);

companyRouter.delete(
  "/:companyId",
  companyController.deleteCompany
);

companyRouter.get(
  "/:companyId",
  companyController.getCompanyById
);

companyRouter.get(
  "/",
  companyController.getCompanies
);
export default companyRouter;
