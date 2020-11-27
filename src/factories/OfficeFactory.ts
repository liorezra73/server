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
    const newMonth: number = (currentMonth +
      officeSchema.limits.expiryDate) as number;
    expiryDate.setMonth(newMonth);
    return {
      name: officeSchema.details.name,
      address: {
        city: officeSchema.details.address.city,
        street: officeSchema.details.address.street,
        number: officeSchema.details.address.number,
      },
      sn: officeSchema.details.sn,
      maxCompanies: officeSchema.limits.maxCompanies,
      maxEmployees: officeSchema.limits.maxEmployees,
      expiryDate: expiryDate,
      isConfirmedTerms: false,
      isActive: true,
      employeesCount: 1,
      companiesCount: 0,
    };
  }
}

const officeFactory: OfficeFactory = new OfficeFactory();
export default officeFactory;
