import { Request, Response, NextFunction } from "express";
import { ValidatedRequest } from "express-joi-validation";
import {
  InvoiceIncomeDetailsRequestSchema,
  InvoiceIncomeRequestSchema,
} from "../../validations/invoiceIncomeSchema";

class InvoiceIncomeController {
  createInvoiceIncome(
    req: ValidatedRequest<InvoiceIncomeDetailsRequestSchema>,
    res: Response,
    next: NextFunction
  ) {
    try {
      console.log(req.body);
      res.end(
        `invoice income of company ${req.params.companyId} of office ${req.params.officeId} created successfully`
      );
    } catch (err) {
      next(err);
    }
  }
  updateInvoiceIncome(
    req: ValidatedRequest<InvoiceIncomeDetailsRequestSchema>,
    res: Response,
    next: NextFunction
  ) {
    try {
      console.log(req.body);
      res.end(
        `invoice income ${req.params.invoiceIncomeId} of company ${req.params.companyId} of office ${req.params.officeId} updated successfully`
      );
    } catch (err) {
      next(err);
    }
  }

  updateInvoiceIncomeIncludesStatus(
    req: ValidatedRequest<InvoiceIncomeRequestSchema>,
    res: Response,
    next: NextFunction
  ) {
    try {
      console.log(req.body);
      res.end(
        `invoice income ${req.params.invoiceIncomeId} of company ${req.params.companyId} of office ${req.params.officeId} updated successfully includes status`
      );
    } catch (err) {
      next(err);
    }
  }

  getInvoiceIncomeById(req: Request, res: Response, next: NextFunction) {
    try {
      res.end(
        `get invoice income ${req.params.invoiceIncomeId} of company ${req.params.companyId} of office ${req.params.officeId}`
      );
    } catch (err) {
      next(err);
    }
  }

  getInvoicesIncome(req: Request, res: Response, next: NextFunction) {
    try {
      res.end(
        `get invoices income of company ${req.params.companyId} of office ${req.params.officeId}`
      );
    } catch (err) {
      next(err);
    }
  }
}

const invoiceIncomeController: InvoiceIncomeController = new InvoiceIncomeController();
export default invoiceIncomeController;
