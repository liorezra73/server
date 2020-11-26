import IOfficeEmployee from "../../models/IOfficeEmployee";

class OfficeEmployeeRepository{
    async createOfficeEmployee(officeEmployee: IOfficeEmployee): Promise<void>{
        console.log(officeEmployee);
        
    }
}

const officeEmployeeRepository: OfficeEmployeeRepository = new OfficeEmployeeRepository;
export default officeEmployeeRepository;