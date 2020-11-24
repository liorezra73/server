import IUser from "../models/IUser";
import UserAlreadyExistsError from "../errors/UserAlreadyExistsError";
import { OfficeFullRequestSchema } from "../validations/officeSchema";
import { ContainerTypes } from "express-joi-validation";
import userService from "./UserService";
import officeFactory from "../factories/OfficeFactory";
import IOffice from "../models/IOffice";
import officeEmployeeFactory from "../factories/OfficeEmployeeFactory";
import OfficeEmployeeType from "../enums/OfficeEmployeeType";
import IOfficeEmployee from "../models/IOfficeEmployee";
import officeRepository from "../dal/repositories/OfficeRepository";
import OfficeNameAlreadyExistsError from "../errors/OfficeNameAlreadyExistsError";

class OfficeService {
  async createOffice(
    officeSchema: OfficeFullRequestSchema[ContainerTypes.Body]
  ): Promise<void> {
    try {
      const officeUser: IUser = await userService.createOfficeUser(
        officeSchema.employee.user
      );
      const office: IOffice = officeFactory.createOffice(officeSchema);
      const isOfficeNameExists: boolean = await officeRepository.isOfficeNameExists(
        office.name
      );
      if (isOfficeNameExists) {
        throw new OfficeNameAlreadyExistsError(
          400,
          `office with the name "${office.name}" already exists`
        );
      } else {
        const officeEmployee: IOfficeEmployee = officeEmployeeFactory.createOfficeEmployee(
          officeSchema.employee,
          OfficeEmployeeType.Director,
          officeUser
        );
        await officeRepository.createOffice(office, officeEmployee);
      }
    } catch (err) {
      throw err;
    }
  }
}

const officeService: OfficeService = new OfficeService();
export default officeService;
