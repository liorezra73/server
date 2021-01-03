import express from "express";
import { createValidator } from "express-joi-validation";
import { customerSchema } from "../../validations/customerSchema";
import customerController from "../controllers/CustomerControlle";

const customerRouter = express.Router({ mergeParams: true });
const validator = createValidator();

customerRouter.post(
  "/",
  validator.body(customerSchema),
  customerController.createCustomer
);

customerRouter.put(
  "/:customerId",
  validator.body(customerSchema),
  customerController.updateCustomer
);

customerRouter.delete("/:customerId", customerController.deleteCustomer);

customerRouter.get("/:customerId", customerController.getCustomerById);

customerRouter.get("/", customerController.getCustomers);

export default customerRouter;
