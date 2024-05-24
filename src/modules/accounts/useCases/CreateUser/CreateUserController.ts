import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { email, password, name, lastname, sex } = request.body;
      const createUserUseCase = container.resolve(CreateUserUseCase);
      const createdUser = await createUserUseCase.execute({
        email,
        password,
        lastname,
        name,
        sex,
      });
      return response.status(200).json({ data: createdUser });
    } catch (error) {
      //@ts-ignore
      return response.status(400).json({ message: error.message });
    }
  }
}

export { CreateUserController };
