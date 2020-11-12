import IUser from "./IUser";
import OfficeEmployeeType from "../enums/officeEmployeeType";

export default interface IOfficeEmployee {
  id?: number;
  officeId?: number;
  firstName: string;
  lastName: string;
  employeeType: OfficeEmployeeType;
  user: IUser;
}
