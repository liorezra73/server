import IOfficeEmployee from "../../models/IOfficeEmployee";

class OfficeEmployeeRepository {
  async createOfficeEmployee(officeEmployee: IOfficeEmployee): Promise<void> {
    console.log(officeEmployee);
  }

  async editOfficeEmployee(
    employeeId: number,
    officeEmploy: IOfficeEmployee
  ): Promise<void> {}
}

const officeEmployeeRepository: OfficeEmployeeRepository = new OfficeEmployeeRepository();
export default officeEmployeeRepository;
