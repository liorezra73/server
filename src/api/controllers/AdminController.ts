import { Response, NextFunction } from "express";
import { ValidatedRequest } from "express-joi-validation";
import { UserRequestSchema } from "../../validations/userSchema";
import userService from "../../services/UserService";
class AdminController {
  async createAdmin(
    req: ValidatedRequest<UserRequestSchema>,
    res: Response,
    next: NextFunction
  ) {
    try {
        
      await userService.createAdmin(req.body);
      res.status(201).send("admin created");
    } catch (err) {
      next(err);
    }
  }
}

const adminController: AdminController = new AdminController();
export default adminController;
