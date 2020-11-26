import { Request, Response, NextFunction } from "express";
import { ValidatedRequest } from "express-joi-validation";
import {
  OfficeEmployeeRequestSchema,
  OfficeEmployeeDetailsRequestSchema,
} from "../../validations/officeEmployeeSchema";
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
  async editOfficeEmployee(
    req: ValidatedRequest<OfficeEmployeeDetailsRequestSchema>,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      await officeEmployeeService.editOfficeEmployee(
        req.params.employeeId,
        req.body
      );
      res.end(
        `edit employee ${req.params.employeeId} from office ${req.params.officeId}`
      );
    } catch (err) {
      next(err);
    }
  }

  async deleteOfficeEmployee(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      await officeEmployeeService.deleteOfficeEmployee(req.params.employeeId);

      res.end(
        `delete employee ${req.params.employeeId} from office ${req.params.officeId}`
      );
    } catch (err) {
      next(err);
    }
  }

  async getOfficeEmployeeById(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      await officeEmployeeService.getOfficeEmployeeById(req.params.employeeId);

      res.end(
        `get employee ${req.params.employeeId} from office ${req.params.officeId}`
      );
    } catch (err) {
      next(err);
    }
  }

  async getOfficeEmployees(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      await officeEmployeeService.getOfficeEmployees();
      res.end(`get employees from office ${req.params.officeId}`);
    } catch (err) {
      next(err);
    }
  }
}

const officeEmployeeController: OfficeEmployeeController = new OfficeEmployeeController();
export default officeEmployeeController;
