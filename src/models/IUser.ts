import UserType from "../enums/userType";

export default interface IUser {
  id?:number;
  username: string;
  email: string;
  phone: string;
  password: string;
  userType: UserType;
  registrationDate: Date;
}
