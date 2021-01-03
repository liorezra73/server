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

officeRouter.put(
  "/:officeId/details",
  validator.body(officeDetailsSchema),
  officeController.updateOfficeDetails
); //both

officeRouter.delete("/:officeId", officeController.deleteOffice);
officeRouter.get("/:officeId", officeController.getOfficeById);
officeRouter.get("/", officeController.getOffices);
export default officeRouter;
