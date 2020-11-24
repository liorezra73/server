import { Response, NextFunction } from "express";
import { ValidatedRequest } from "express-joi-validation";
import { OfficeFullRequestSchema, OfficeMaxCompaniesRequestSchema } from "../../validations/officeSchema";
import officeService from "../../services/OfficeService";

class OfficeController {
  async createOffice(
    req: ValidatedRequest<OfficeFullRequestSchema>,
    res: Response,
    next: NextFunction
  ):Promise<void> {
    try {
      await officeService.createOffice(req.body);
      res.end("office created successfully");
    } catch (err) {
      next(err);
    }
  }
  async updateOfficeMaxCompanies(
    req: ValidatedRequest<OfficeMaxCompaniesRequestSchema>,
    res: Response,
    next: NextFunction
  ):Promise<void>{
try {
    res.end(`office with id ${req.params.officeId} maxCompanies is now ${req.body}`)
    
} catch (err) {
    next(err)
}
  }
}

const officeController: OfficeController = new OfficeController();
export default officeController;
