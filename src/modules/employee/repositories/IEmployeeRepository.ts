import { ICreateEmployeeDTO } from "../dtos/ICreateEmployeeDTO";
import { Employee } from "../models/Employee";

interface IEmployeeRepository {
    create({email,lastname,name,phone}: ICreateEmployeeDTO): Promise<Employee>
}


export {IEmployeeRepository}