import { Request, Response } from "express";
import { IFilterReserveDTO } from "../dtos/IFilterReserveDTO";
import { container } from "tsyringe";
import { ListReservesUseCase } from "./ListReservesUseCase";
class ListReservesController {
  async handle(request: Request, response: Response) {
    const filter: IFilterReserveDTO = {};
    const { userId, clientId, propertyId } = request.query;
    if (userId) {
      const newUserId = parseInt(userId as string);
      filter.userId = newUserId;
    }
    if (clientId) {
      const newClientId = parseInt(clientId as string);
      filter.clientId = newClientId;
    }
    if (propertyId) {
      const newPropertyId = parseInt(propertyId as string);
      filter.propertyId = newPropertyId;
    }
    try {
      const listReserveUseCase = container.resolve(ListReservesUseCase);
      const reserves = await listReserveUseCase.execute(filter);
      return response.status(200).json({ data: reserves });
    } catch (error: any) {
      return response.status(400).json({ message: error.message });
    }
  }
}
export { ListReservesController };
