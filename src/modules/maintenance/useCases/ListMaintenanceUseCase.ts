import { injectable, inject } from "tsyringe";
import { IMaintenanceRepository } from "../repositories/IMaintenance";
import { ErrorConstants } from "@errors/ErrorConstants";

@injectable()
class ListMaintenanceUseCase {
  constructor(
    //@ts-ignore
    @inject("MaintenanceRepository")
    private maintenanceRepository: IMaintenanceRepository
  ) {}
  async execute(userId: number) {
    try {
      const maintenance = await this.maintenanceRepository.findAll(userId);
      return maintenance;
    } catch (error) {
      console.log(error);
      throw new Error(ErrorConstants.LIST_MAINTENACE_ERROR);
    }
  }
}
export { ListMaintenanceUseCase };
