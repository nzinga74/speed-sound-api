import { inject, injectable } from "tsyringe";
import { ICreateEmployeeDTO } from "../dtos/ICreateEmployeeDTO";
import { IEmployeeRepository } from "../repositories/IEmployeeRepository";
import { ErrorConstants } from "@errors/ErrorConstants";

@injectable()
class CreateEmployeeUseCase {
  constructor(
    //@ts-ignore
    @inject("EmployeeRepository")
    private employeeRepository: IEmployeeRepository
  ) {}
  async execute({ email, lastname, name, phone }: ICreateEmployeeDTO) {
    try {
      const employee = this.employeeRepository.create({
        email,
        lastname,
        name,
        phone,
      });
      return employee;
    } catch (error) {
      throw new Error(ErrorConstants.CREATE_EMPLOYEE_ERROR);
    }
  }
}
export { CreateEmployeeUseCase };
