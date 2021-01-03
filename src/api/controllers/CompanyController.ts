import {Request,Response, NextFunction } from "express";
import { ValidatedRequest } from "express-joi-validation";
import {
  CompanyFullRequestSchema,
  CompanyDetailRequestSchema,
} from "../../validations/companyScehma";
import { ActivityRequestSchema } from "../../validations/activitySchema";

class CompanyController {
  async createCompany(
    req: ValidatedRequest<CompanyFullRequestSchema>,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      console.log(req.body);
      res.end("company created successfully");
    } catch (err) {
      next(err);
    }
  }

  async updateCompany(
    req: ValidatedRequest<CompanyDetailRequestSchema>,
    res: Response,
    next: NextFunction
  ) {
    try {
      console.log(req.body);
      res.end(`company ${req.params.companyId} of office ${req.params.officeId} updated successfully`);
    } catch (err) {
      next(err);
    }
  }

  async updateCompanyActivity(
    req: ValidatedRequest<ActivityRequestSchema>,
    res: Response,
    next: NextFunction
  ) {
    try {
      console.log(req.body);
      res.end(`company ${req.params.companyId} of office ${req.params.officeId} updated activity successfully`);
    } catch (err) {
      next(err);
    }
  }

  async deleteCompany(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      res.end(`company ${req.params.companyId} of office ${req.params.officeId} deleted successfully`);
    } catch (err) {
      next(err);
    }
  }

  async getCompanyById(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      res.end(`get company ${req.params.companyId} of office ${req.params.officeId} successfully`);
    } catch (err) {
      next(err);
    }
  }

  
  async getCompanies(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      res.end(`get companies of office ${req.params.officeId} successfully`);
    } catch (err) {
      next(err);
    }
  }
}

const companyController: CompanyController = new CompanyController();
export default companyController;
