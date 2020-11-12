import IAddress from "./IAddress";

export default interface ICompany {
  id?: number;
  officeId: number;
  officeEmployeeId?: number;
  name: string;
  companyType: string; //????
  sn: number;
  address: IAddress;
  mainPhone: string;
}
