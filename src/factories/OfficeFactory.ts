import IOffice from "../models/IOffice";

import { ContainerTypes } from "express-joi-validation";
import { OfficeFullRequestSchema } from "../validations/officeSchema";
import e from "express";

class OfficeFactory {
  createOffice(
    officeSchema: OfficeFullRequestSchema[ContainerTypes.Body]
  ): IOffice {
    const expiryDate = new Date();
    const currentMonth: number = expiryDate.getMonth();
    const newMonth: number = (currentMonth + officeSchema.expiryDate) as number;
    expiryDate.setMonth(newMonth);
    return {
      name: officeSchema.details.name,
      address: {
        city: officeSchema.details.address.city,
        street: officeSchema.details.address.street,
        number: officeSchema.details.address.number,
      },
      sn: officeSchema.details.sn,
      maxCompanies: officeSchema.maxCompanies,
      maxEmployees: officeSchema.maxEmployees,
      expiryDate: expiryDate,
      isConfirmedTerms: false,
    };
  }
}

const officeFactory: OfficeFactory = new OfficeFactory();
export default officeFactory;