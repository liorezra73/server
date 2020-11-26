import IAddress from "./IAddress";

export default interface IOffice {
  id?:number;
  name: string;
  address: IAddress;
  sn: string;
  maxCompanies: number;
  maxEmployees: number;
  isConfirmedTerms: boolean;
  expiryDate: Date;
  isActive: boolean;
  employeesCount: number;
  companiesCount: number;
}
