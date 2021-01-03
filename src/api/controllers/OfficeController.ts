import { Request, Response, NextFunction } from "express";
import { ValidatedRequest } from "express-joi-validation";
import {
  OfficeFullRequestSchema,
  OfficeLimitsRequestSchema,
  OfficeDetailsRequestSchema,
} from "../../validations/officeSchema";
import officeService from "../../services/OfficeService";

class OfficeController {
  async createOffice(
    req: ValidatedRequest<OfficeFullRequestSchema>,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      await officeService.createOffice(req.body);
      res.end("office created successfully");
    } catch (err) {
      next(err);
    }
  }
  async updateOfficeLimits(
    req: ValidatedRequest<OfficeLimitsRequestSchema>,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      console.log(req.body);

      res.end(`update limits of office with id ${req.params.officeId}`);
    } catch (err) {
      next(err);
    }
  }

  async updateOfficeDetails(
    req: ValidatedRequest<OfficeDetailsRequestSchema>,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      console.log(req.body);
      res.end(`update details of office with id ${req.params.officeId}`);
    } catch (err) {
      next(err);
    }
  }

  async getOfficeById(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      res.end(`get office with id ${req.params.officeId}`);
    } catch (err) {
      next(err);
    }
  }

  async getOffices(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      res.end(`get offices`);
    } catch (err) {
      next(err);
    }
  }

  async deleteOffice(req: Request, res: Response, next: NextFunction) {
    try {
      res.end(`office ${req.params.officeId} deleted`);
    } catch (err) {
      next(err);
    }
  }
}

const officeController: OfficeController = new OfficeController();
export default officeController;
