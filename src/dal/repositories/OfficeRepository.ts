import IOffice from "../../models/IOffice";
import IOfficeEmployee from "../../models/IOfficeEmployee";

class OfficeRepository {
    async isOfficeNameExists(name: string): Promise<boolean> {
        return false;
    }
    async createOffice(office:IOffice,officeEmployee:IOfficeEmployee):Promise<void>{
        console.log(office);
        console.log(officeEmployee);
    }
}

const officeRepository: OfficeRepository = new OfficeRepository();
export default officeRepository;
