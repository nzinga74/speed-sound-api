import { ICreateMaintenanceDTO } from "../dtos/ICreateMaintenanceDTO";
import { Maintenance } from "../models/Maintenance";

interface IMaintenanceRepository {
  create({
    closingDate,
    cost,
    description,
    employeeId,
    openingDate,
    propertyId,
  }: ICreateMaintenanceDTO): Promise<Maintenance>;
  findAll(): Promise<Maintenance[]>;
}

export { IMaintenanceRepository };
