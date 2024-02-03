import { Request, Response } from "express";
import { container } from "tsyringe";
import { AuthenticateUseCase } from "./AuthenticateUseCase";

class AuthenticateController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { email, password } = request.body;
      const authenticateUseCase = container.resolve(AuthenticateUseCase);
      const authenticateResponse = await authenticateUseCase.execute({
        email,
        password,
      });
      return response.status(200).json(authenticateResponse);
    } catch (error: any) {
      return response.status(400).json({ message: error.message });
    }
  }
}

export { AuthenticateController };
