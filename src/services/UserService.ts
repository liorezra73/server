import { UserRequestSchema } from "../validations/userSchema";
import { ContainerTypes } from "express-joi-validation";
import IUser from "../models/IUser";
import userRepository from "../dal/repositories/UserRepository";
import UserAlreadyExistsError from "../errors/UserAlreadyExistsError";
import passwordService from "./PasswordService";
import userFactory from "../factories/UserFactory";
// import OfficeEmployeeType from "../enums/OfficeEmployeeType";

class UserService {
  async createAdmin(
    adminSchema: UserRequestSchema[ContainerTypes.Body]
  ): Promise<void> {
    try {
      const admin: IUser = userFactory.createAdmin(adminSchema);
      const isUserExists = await userRepository.isUserExists(admin);
      if (isUserExists)
        throw new UserAlreadyExistsError(
          400,
          `username/email/phone already exists...`
        );
      else {
        const encryptionPassword = await passwordService.encryption(
          admin.password
        );
        admin.password = encryptionPassword;
        await userRepository.createUser(admin);
      }
    } catch (err) {
      throw err;
    }
  }
  async createOfficeUser(
    officeUserSchema: UserRequestSchema[ContainerTypes.Body]
  ): Promise<IUser> {
    try {
      const officeUser = userFactory.createOfficeUser(officeUserSchema);
      const isUserExists = await userRepository.isUserExists(officeUser);
      if (isUserExists)
        throw new UserAlreadyExistsError(
          400,
          `username/email/phone already exists...`
        );
      else {
        const encryptionPassword = await passwordService.encryption(
          officeUser.password
        );
        officeUser.password = encryptionPassword;
        return officeUser;
      }
    } catch (err) {
      throw err;
    }
  }
}

const userService: UserService = new UserService();
export default userService;
