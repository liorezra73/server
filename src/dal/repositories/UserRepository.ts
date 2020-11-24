import IUser from "../../models/IUser";

class UserRepository {
    async createUser(user:IUser):Promise<void> {
        console.log(user);
    }
    async isUserExists(user: IUser):Promise<boolean> {
        return false;
    }
    
}

const userRepository: UserRepository = new UserRepository();
export default userRepository;