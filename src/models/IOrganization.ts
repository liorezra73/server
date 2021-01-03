import IAddress from "./IAddress";

export default interface IOrganization {
  id?: number; 
  name: string; 
  address: IAddress; 
  sn: string; 
  isConfirmedTerms: boolean;
  isActive: boolean;
}
