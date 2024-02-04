import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListContractUseCase } from "./ListContractUseCase";
import { IFilterContract } from "../dtos/IFilterContractDTO";

class ListContractController {
  async handle(request: Request, response: Response) {
    const filter: IFilterContract = {};
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
      const listContractUseCase = container.resolve(ListContractUseCase);
      const contract = await listContractUseCase.execute(filter);
      return response.status(200).json({ data: contract });
    } catch (error: any) {
      return response.status(400).json({ message: error.message });
    }
  }
}
export { ListContractController };
