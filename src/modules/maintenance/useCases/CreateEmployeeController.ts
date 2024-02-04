import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateEmployeeUseCase } from "./CreateEmployeeUseCase";
class CreateEmployeeController {
  async handle(request: Request, response: Response) {
    try {
      const { email, name, lastname, phone } = request.body;
      const createEmployeeUseCase = container.resolve(CreateEmployeeUseCase);
      const employee = await createEmployeeUseCase.execute({
        email,
        lastname,
        name,
        phone,
      });
      return response.status(200).json({ data: employee });
    } catch (error) {
      //@ts-ignore
      return response.status(400).json({ message: error.message });
    }
  }
}
export { CreateEmployeeController };
