import IAddress from "./IAddress";

export default interface ISupplier {
  id?: number;
  companyId: number;
  name: string;
  address: IAddress;
}
