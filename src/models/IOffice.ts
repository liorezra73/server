import IOrganization from "./IOrganization";

export default interface IOffice extends IOrganization{
  maxCompanies: number;
  maxEmployees: number;
  expiryDate: Date;
  employeesCount: number;
  companiesCount: number;
}


