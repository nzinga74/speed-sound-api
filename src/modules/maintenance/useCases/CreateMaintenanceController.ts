import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateMaintenanceUseCase } from "./CreateMaintenanceUseCase";
class CreateMaintenanceController {
  async handle(request: Request, response: Response) {
    try {
      const {
        description,
        openingDate,
        closingDate,
        cost,
        employeeId,
        propertyId,
      } = request.body;
      const createMaintenanceUseCase = container.resolve(
        CreateMaintenanceUseCase
      );
      const maintenance = await createMaintenanceUseCase.execute({
        description,
        openingDate,
        closingDate,
        cost,
        employeeId,
        propertyId,
      });
      return response.status(200).json({ data: maintenance });
    } catch (error) {
      return response.status(400).json({
        //@ts-ignore
        message: error.message,
      });
    }
  }
}
export { CreateMaintenanceController };
