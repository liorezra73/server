import { OfficeEmployeeRequestSchema } from "../validations/officeEmployeeSchema";
import { ContainerTypes } from "express-joi-validation";
import IUser from "../models/IUser";
import userService from "./UserService";
import IOfficeEmployee from "../models/IOfficeEmployee";
import officeEmployeeFactory from "../factories/OfficeEmployeeFactory";
import officeEmployeeRepository from "../dal/repositories/OfficeEmployeeRepository";

class OfficeEmployeeService {
  async createOfficeEmployee(
    OfficeEmployeeSchema: OfficeEmployeeRequestSchema[ContainerTypes.Body]
  ): Promise<void> {
    try {
      const officeUser: IUser = await userService.createOfficeUser(
        OfficeEmployeeSchema.user
      );
      const officeEmployee: IOfficeEmployee = officeEmployeeFactory.createOfficeEmployee(
        OfficeEmployeeSchema,
        officeUser
      );

      await officeEmployeeRepository.createOfficeEmployee(officeEmployee);
    } catch (err) {
        throw err;
    }
  }
}

const officeEmployeeService: OfficeEmployeeService = new OfficeEmployeeService();
export default officeEmployeeService;
