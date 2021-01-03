import CompanyType from "../enums/CompanyType";
import IOrganization from "./IOrganization";

export default interface ICompany extends IOrganization {
  officeId: number;
  officeEmployeeId?: number;
  companyType: CompanyType;
  mainPhone: string;
}
