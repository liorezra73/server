import IUser from "../models/IUser";
import { UserRequestSchema } from "../validations/userSchema";
import UserType from "../enums/UserType";
import { ContainerTypes } from "express-joi-validation";

class UserFactory {
  createAdmin(adminSchema: UserRequestSchema[ContainerTypes.Body]): IUser {
    return {
      username: adminSchema.username,
      email: adminSchema.email,
      phone: adminSchema.phone,
      password: adminSchema.password,
      registrationDate: new Date(),
      userType: UserType.Admin,
    };
  }
  createOfficeUser(
    officeUserSchema: UserRequestSchema[ContainerTypes.Body]
  ): IUser {
    return {
      username: officeUserSchema.username,
      email: officeUserSchema.email,
      phone: officeUserSchema.phone,
      password: officeUserSchema.password,
      registrationDate: new Date(),
      userType: UserType.Office,
    };
  }
}

const userFactory: UserFactory= new UserFactory();
export default userFactory;
