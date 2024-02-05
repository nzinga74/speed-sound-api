import { Request, Response } from "express";
import { CreateReserveUseCase } from "./CreateReserveUseCase";
import { container } from "tsyringe";

class CreateReserveController {
  async handle(request: Request, response: Response) {
    try {
      const { clientId, estimatedDate, propertyId, userId } = request.body;
      const createReserveUseCase = container.resolve(CreateReserveUseCase);
      const reserve = await createReserveUseCase.execute({
        clientId,
        estimatedDate,
        isActived: true,
        propertyId,
        userId,
      });
      return response.status(200).json({ data: reserve });
    } catch (error) {
      //@ts-ignore
      return response.status(400).json({ message: error.message });
    }
  }
}
export { CreateReserveController };
