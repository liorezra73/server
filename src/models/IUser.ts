import UserType from "../enums/UserType";

export default interface IUser {
  id?:number;
  username: string;
  email: string;
  phone: string;
  password: string;
  userType: UserType;
  registrationDate: Date;
}
