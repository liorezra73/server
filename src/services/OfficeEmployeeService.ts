import {
  OfficeEmployeeRequestSchema,
  OfficeEmployeeDetailsRequestSchema,
} from "../validations/officeEmployeeSchema";
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

  async editOfficeEmployee(
    employeeId: number,
    OfficeEmployeeDetailsSchema: OfficeEmployeeDetailsRequestSchema[ContainerTypes.Body]
  ): Promise<void> {
    try {
      console.log(employeeId);
      console.log(OfficeEmployeeDetailsSchema);
    } catch (err) {
      throw err;
    }
  }

  async deleteOfficeEmployee(employeeId: string): Promise<void> {
    try {
      //convert employeeId to number
      console.log(employeeId);
    } catch (err) {
      throw err;
    }
  }

  async getOfficeEmployeeById(employeeId: string): Promise<void> { //return IOfficeEmployee
    try {
      //convert employeeId to number
      console.log(employeeId);
    } catch (err) {
      throw err;
    }
  }

  async getOfficeEmployees(): Promise<void> {//return IOfficeEmployee[]
    try {
      //convert employeeId to number
    } catch (err) {
      throw err;
    }
  }
}

const officeEmployeeService: OfficeEmployeeService = new OfficeEmployeeService();
export default officeEmployeeService;
