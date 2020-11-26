import IUser from "./IUser";
import OfficeEmployeeType from "../enums/OfficeEmployeeType";

export default interface IOfficeEmployee {
  id?: number;
  officeId?: number;
  firstName: string;
  lastName: string;
  employeeType: OfficeEmployeeType;
  user?: IUser;
  userId?: number;
}
