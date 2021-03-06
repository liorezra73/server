import express from "express";
import { createValidator } from "express-joi-validation";
import {
  officeEmployeeSchema,
  officeEmployeeDetailsSchema,
} from "../../validations/officeEmployeeSchema";
import officeEmployeeController from "../controllers/OfficeEmployeeController";

const officeEmployeeRouter = express.Router({ mergeParams: true });
const validator = createValidator();

officeEmployeeRouter.post(
  "/",
  validator.body(officeEmployeeSchema),
  officeEmployeeController.createOfficeEmployee
);

officeEmployeeRouter.put(
  "/:officeEmployeeId",
  validator.body(officeEmployeeDetailsSchema),
  officeEmployeeController.editOfficeEmployee
);
officeEmployeeRouter.delete(
  "/:officeEmployeeId",
  officeEmployeeController.deleteOfficeEmployee
);

officeEmployeeRouter.get(
    "/:officeEmployeeId",
    officeEmployeeController.getOfficeEmployeeById
  );
  officeEmployeeRouter.get(
    "/",
    officeEmployeeController.getOfficeEmployees
  );

export default officeEmployeeRouter;
