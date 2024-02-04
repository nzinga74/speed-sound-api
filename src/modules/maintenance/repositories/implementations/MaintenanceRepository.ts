import { ICreateMaintenanceDTO } from "@modules/maintenance/dtos/ICreateMaintenanceDTO";
import { Maintenance } from "@modules/maintenance/models/Maintenance";
import { IMaintenanceRepository } from "../IMaintenance";
import { prismaClient } from "database";

class MaintenanceRepository implements IMaintenanceRepository {
  findAll(userId: number): Promise<Maintenance[]> {
    return prismaClient.$queryRaw`select * from Maintenance m where m.propertyId in (select id from properties p where userId = ${userId});`;
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
