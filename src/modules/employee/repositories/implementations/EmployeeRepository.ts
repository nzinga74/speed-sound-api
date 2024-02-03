import { ICreateEmployeeDTO } from "@modules/employee/dtos/ICreateEmployeeDTO";
import { Employee } from "@modules/employee/models/Employee";
import { IEmployeeRepository } from "../IEmployeeRepository";
import { prismaClient } from "database";

class EmployeeRepository implements IEmployeeRepository {
    create({ email, lastname, name, phone }: ICreateEmployeeDTO): Promise<Employee> {
        const employee = prismaClient.employee.create({
            email,
            name,
            lastname,
            phone
        })
    }

}
export {EmployeeRepository}