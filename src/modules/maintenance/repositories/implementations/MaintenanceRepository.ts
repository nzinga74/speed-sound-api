import { ICreateMaintenanceDTO } from "@modules/maintenance/dtos/ICreateMaintenanceDTO";
import { Maintenance } from "@modules/maintenance/models/Maintenance";
import { IMaintenanceRepository } from "../IMaintenance";
import { prismaClient } from "database";

class MaintenanceRepository implements IMaintenanceRepository {
  async findAll(): Promise<Maintenance[]> {
    return await prismaClient.maintenance.findMany();
  }
  async create({
    closingDate,
    cost,
    description,
    employeeId,
    openingDate,
    propertyId,
  }: ICreateMaintenanceDTO): Promise<Maintenance> {
    const maintenance = await prismaClient.maintenance.create({
      data: {
        closingDate,
        cost,
        description,
        openingDate,
        employeeId,
        propertyId,
      },
    });
    return maintenance;
  }
}
export { MaintenanceRepository };
