import IOfficeEmployee from "../models/IOfficeEmployee";
import { IOfficeEmployeeRequest } from "../validations/officeEmployeeSchema";
import OfficeEmployeeType from "../enums/OfficeEmployeeType";
import IUser from "../models/IUser";

class OfficeEmployeeFactory {
  createOfficeEmployee(
    officeEmployeeSchema: IOfficeEmployeeRequest,
    officeUser: IUser
  ): IOfficeEmployee {
    return {
      firstName: officeEmployeeSchema.details.firstName,
      lastName: officeEmployeeSchema.details.lastName,
      user: officeUser,
      employeeType: officeEmployeeSchema.details
        .employeeType as OfficeEmployeeType,
    };
  }
}

const officeEmployeeFactory: OfficeEmployeeFactory = new OfficeEmployeeFactory();
export default officeEmployeeFactory;
