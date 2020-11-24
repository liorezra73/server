import express from "express";
import { createValidator } from "express-joi-validation";
import { userSchema } from "../../validations/userSchema";
import adminController from "../controllers/AdminController";

const adminRouter = express.Router();
const validator = createValidator();

adminRouter.post("/", validator.body(userSchema), adminController.createAdmin);

export default adminRouter;
