import IOfficeEmployee from "../models/IOfficeEmployee";
import { IOfficeEmployeeRequest } from "../validations/officeEmployeeSchema";
import OfficeEmployeeType from "../enums/OfficeEmployeeType";
import IUser from "../models/IUser";

class OfficeEmployeeFactory {
  createOfficeEmployee(
    officeEmployeeSchema: IOfficeEmployeeRequest,
    officeEmployeeType: OfficeEmployeeType,
    officeUser: IUser
  ): IOfficeEmployee {
    return {
      firstName: officeEmployeeSchema.firstName,
      lastName: officeEmployeeSchema.lastName,
      user: officeUser,
      employeeType: officeEmployeeType,
    };
  }
}

const officeEmployeeFactory: OfficeEmployeeFactory = new OfficeEmployeeFactory();
export default officeEmployeeFactory;
