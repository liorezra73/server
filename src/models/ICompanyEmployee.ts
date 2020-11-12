import IUser from "./IUser";

export default interface ICompanyEmployee {
  id?: number;
  companyId?: number;
  firstName: string;
  lastName: string;
  user: IUser;
}
