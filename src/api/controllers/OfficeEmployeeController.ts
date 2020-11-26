import { Response, NextFunction } from "express";
import { ValidatedRequest } from "express-joi-validation";
import { OfficeEmployeeRequestSchema } from "../../validations/officeEmployeeSchema";
import officeEmployeeService from "../../services/OfficeEmployeeService";

class OfficeEmployeeController {
  async createOfficeEmployee(
    req: ValidatedRequest<OfficeEmployeeRequestSchema>,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      await officeEmployeeService.createOfficeEmployee(req.body);

      res.end(`new employee added to office ${req.params.officeId}`);
    } catch (err) {
      next(err);
    }
  }
}

const officeEmployeeController: OfficeEmployeeController = new OfficeEmployeeController();
export default officeEmployeeController;
