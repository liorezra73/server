import { Request, Response, NextFunction } from "express";
import { ValidatedRequest } from "express-joi-validation";
import {
  CompanyEmployeeRequestSchema,
  CompanyEmployeeDetailsRequestSchema,
} from "../../validations/companyEmployeeSchema";

class CompanyEmployeeController {
  async createCompanyEmployee(
    req: ValidatedRequest<CompanyEmployeeRequestSchema>,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
        console.log(req.body);
        
      res.end("company employee created successfully");
    } catch (err) {
      next(err);
    }
  }

  async editCompanyEmployee(
    req: ValidatedRequest<CompanyEmployeeDetailsRequestSchema>,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      res.end(`company employee ${req.params.companyEmployeeId} edited successfully`);
    } catch (err) {
      next(err);
    }
  }

  async deleteCompanyEmployee(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      res.end(
        `company employee ${req.params.companyEmployeeId} deleted successfully`
      );
    } catch (err) {
      next(err);
    }
  }

  async getCompanyEmployeeById(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      res.end(
        `company employee ${req.params.companyEmployeeId} get successfully`
      );
    } catch (err) {
      next(err);
    }
  }

  async getCompanyEmployees(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      res.end(`company employees get successfully`);
    } catch (err) {
      next(err);
    }
  }
}

const companyEmployeeController: CompanyEmployeeController = new CompanyEmployeeController();
export default companyEmployeeController;
