import express from "express";
import { createValidator } from "express-joi-validation";
import {
  officeFullSchema,
  officeLimitsSchema,
  officeDetailsSchema,
} from "../../validations/officeSchema";
import officeController from "../controllers/OfficeController";

const officeRouter = express.Router({ mergeParams: true });
const validator = createValidator();

officeRouter.post(
  "/",
  validator.body(officeFullSchema),
  officeController.createOffice
);
officeRouter.put(
  "/:officeId/limits",
  validator.body(officeLimitsSchema),
  officeController.updateOfficeLimits
); //admin only
// officeRouter.put("/:officeId/details",validator.body(officeDetailsSchema),officeController.updateOfficeMaxCompanies);//both
//fix max companies
//add max employees edit
//add expiryDate edit
//all above in one api

//delete office api
//deactive office api?

//update office details api
export default officeRouter;
