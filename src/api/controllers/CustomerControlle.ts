import { Request, Response, NextFunction } from "express";
import { ValidatedRequest } from "express-joi-validation";
import { CustomerRequestSchema } from "../../validations/customerSchema";

class CustomerController {
  async createCustomer(
    req: ValidatedRequest<CustomerRequestSchema>,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    console.log(req.body);
    res
      .status(201)
      .end(
        `created customer successfully for company ${req.params.companyId} of office ${req.params.officeId}`
      );

    try {
    } catch (err) {
      next(err);
    }
  }

  async updateCustomer(
    req: ValidatedRequest<CustomerRequestSchema>,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    console.log(req.body);
    res
      .status(200)//204
      .end(
        `updated customer ${req.params.customerId} successfully for company ${req.params.companyId} of office ${req.params.officeId}`
      );

    try {
    } catch (err) {
      next(err);
    }
  }

  async deleteCustomer(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      res
        .status(200)//204
        .end(
          `delete customer ${req.params.customerId} successfully for company ${req.params.companyId} of office ${req.params.officeId}`
        );
    } catch (err) {
      next(err);
    }
  }

  async getCustomerById(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      res
        .status(200)
        .end(
          `get customer ${req.params.customerId} successfully for company ${req.params.companyId} of office ${req.params.officeId}`
        );
    } catch (err) {
      next(err);
    }
  }
  async getCustomers(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      res
        .status(200)
        .end(
          `get customers successfully for company ${req.params.companyId} of office ${req.params.officeId}`
        );
    } catch (err) {
      next(err);
    }
  }
}

const customerController: CustomerController = new CustomerController();
export default customerController;
