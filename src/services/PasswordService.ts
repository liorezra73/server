import * as bcrypt from "bcrypt";
const saltRounds = 10; //invaroment varibles

class PasswordService {
  async encryption(password: string) {
    return await bcrypt.hash(password, saltRounds);
  }
  async comparison(password: string, hash: string) {
    return await bcrypt.compare(password, hash);
  }
}

const passwordService: PasswordService = new PasswordService();
export default passwordService;
