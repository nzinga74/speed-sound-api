import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateClientUseCase } from "./CreateClientUseCase";

class CreateClientController {
  async handle(request: Request, response: Response) {
    try {
      const {
        name,
        lastname,
        phone,
        email,
        province,
        county,
        street,
        district,
        residenceNumber,
        password,
      } = request.body;
      const createClientUseCase = container.resolve(CreateClientUseCase);
      const client = await createClientUseCase.execute({
        name,
        county,
        district,
        email,
        lastname,
        phone,
        province,
        residenceNumber,
        street,
        password,
      });

      return response.json({ data: client });
    } catch (error) {
      //@ts-ignore
      return response.status(400).json({ message: error.message });
    }
  }
}
export { CreateClientController };
