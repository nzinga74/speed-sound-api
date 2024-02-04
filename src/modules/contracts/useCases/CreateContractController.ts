import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateContractUseCase } from "./CreateContractUseCase";

class CreateContractController {
  async handle(request: Request, response: Response) {
    const {
      clientId,
      description,
      propertyId,
      transaction_price,
      transactionDate,
      userId,
    } = request.body;
    try {
      const createContractUseCase = container.resolve(CreateContractUseCase);
      const contract = await createContractUseCase.execute({
        clientId,
        description,
        propertyId,
        transaction_price,
        transactionDate,
        userId,
      });
      return response.status(200).json({ data: contract });
    } catch (error: any) {
      return response.status(400).json({ message: error.message });
    }
  }
}
export { CreateContractController };
