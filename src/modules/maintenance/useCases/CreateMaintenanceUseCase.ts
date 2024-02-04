import { inject, injectable } from "tsyringe";
import { ICreateMaintenanceDTO } from "../dtos/ICreateMaintenanceDTO";
import { IMaintenanceRepository } from "../repositories/IMaintenance";
import { ErrorConstants } from "@errors/ErrorConstants";
@injectable()
class CreateMaintenanceUseCase {
  constructor(
    //@ts-ignore
    @inject("MaintenanceRepository")
    private maintenanceRepository: IMaintenanceRepository
  ) {}
  async execute({
    closingDate,
    cost,
    description,
    employeeId,
    openingDate,
    propertyId,
  }: ICreateMaintenanceDTO) {
    try {
      const maintenance = await this.maintenanceRepository.create({
        closingDate,
        cost,
        description,
        employeeId,
        openingDate,
        propertyId,
      });

      return maintenance;
    } catch (error) {
      throw new Error(ErrorConstants.CREATE_MAINTENACE_ERROR);
    }
  }
}
export { CreateMaintenanceUseCase };
