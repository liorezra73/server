import express from "express";
import { createValidator } from "express-joi-validation";
import { officeFullSchema, officeMaxCompaniesSchema } from "../../validations/officeSchema";
import officeController from "../controllers/OfficeController";

const officeRouter = express.Router();
const validator = createValidator();

officeRouter.post("/", validator.body(officeFullSchema),officeController.createOffice);
officeRouter.put("/:officeId/maxCompanies",validator.body(officeMaxCompaniesSchema),officeController.updateOfficeMaxCompanies);
//fix max companies
//add max employees edit
//add expiryDate edit
//all above in one api

//delete office api
//deactive office api?

//update office details api
export default officeRouter;