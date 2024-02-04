import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListMaintenanceUseCase } from "./ListMaintenanceUseCase";
class ListMaintenanceController {
  async handle(request: Request, response: Response) {
    try {
      const { userId } = request.query;

      const id = parseInt(userId as string);
      const listMaintenanceUseCase = container.resolve(ListMaintenanceUseCase);
      const maintenance = await listMaintenanceUseCase.execute(id);
      return response.status(200).json({ data: maintenance });
    } catch (error) {
      return response.status(400).json({
        //@ts-ignore
        message: error.message,
      });
    }
  }
}
export { ListMaintenanceController };
