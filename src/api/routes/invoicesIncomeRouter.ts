import express from "express";
import { createValidator } from "express-joi-validation";
import {
  invoiceIncomeSchema,
  invoiceIncomeFullSchema,
} from "../../validations/invoiceIncomeSchema";
import invoiceIncomeController from "../controllers/InvoiceIncomeController";

const invoicesIncomeRouter = express.Router({ mergeParams: true });
const validator = createValidator();

invoicesIncomeRouter.post(
  "/",
  validator.body(invoiceIncomeSchema),
  invoiceIncomeController.createInvoiceIncome
);
invoicesIncomeRouter.put(
  "/:invoiceIncomeId",
  validator.body(invoiceIncomeSchema),
  invoiceIncomeController.updateInvoiceIncome
);

invoicesIncomeRouter.put(
  "/:invoiceIncomeId/includesstatus",
  validator.body(invoiceIncomeFullSchema),
  invoiceIncomeController.updateInvoiceIncomeIncludesStatus
);

invoicesIncomeRouter.get(
  "/:invoiceIncomeId",
  invoiceIncomeController.getInvoiceIncomeById
);

invoicesIncomeRouter.get("/", invoiceIncomeController.getInvoicesIncome);
export default invoicesIncomeRouter;
