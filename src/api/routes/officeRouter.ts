import express from "express";
import { createValidator } from "express-joi-validation";
import { officeFullSchema, officeMaxCompaniesSchema } from "../../validations/officeSchema";
import officeController from "../controllers/OfficeController";

const officeRouter = express.Router();
const validator = createValidator();

officeRouter.post("/", validator.body(officeFullSchema),officeController.createOffice);
officeRouter.put("/:officeId/maxCompanies",validator.body(officeMaxCompaniesSchema),officeController.updateOfficeMaxCompanies);

export default officeRouter;