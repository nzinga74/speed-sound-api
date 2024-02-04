import { ICreateEmployeeDTO } from "@modules/maintenance/dtos/ICreateEmployeeDTO";
import { Employee } from "@modules/maintenance/models/Employee";
import { IEmployeeRepository } from "../IEmployeeRepository";
import { prismaClient } from "database";

class EmployeeRepository implements IEmployeeRepository {
  create({
    email,
    lastname,
    name,
    phone,
  }: ICreateEmployeeDTO): Promise<Employee> {
    const employee = prismaClient.employee.create({
      data: {
        email,
        lastname,
        name,
        phone,
      },
    });
    return employee;
  }
}
export { EmployeeRepository };
