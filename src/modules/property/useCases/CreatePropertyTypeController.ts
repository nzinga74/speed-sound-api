import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreatePropertyTypeUseCase } from "./CreatePropertyTypeUseCase";
class CreatePropertyTypeController {
  async handle(request: Request, response: Response) {
    try {
      const { type } = request.body;
      const createPropertyTypeUseCase = container.resolve(
        CreatePropertyTypeUseCase
      );
      const propertyType = await createPropertyTypeUseCase.execute(type);
      return response.status(200).json({ data: propertyType });
    } catch (error) {
      return response.status(400).json({
        //@ts-ignore
        message: error.message,
      });
    }
  }
}
export { CreatePropertyTypeController };
