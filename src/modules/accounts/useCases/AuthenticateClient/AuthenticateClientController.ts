import { Request, Response } from "express";
import { container } from "tsyringe";
import { AuthenticateClientUseCase } from "./AuthenticateClientUseCase";

class AuthenticateClientController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body;
    const authenticateClientUseCase = container.resolve(
      AuthenticateClientUseCase
    );
    try {
      const userDateLogged = await authenticateClientUseCase.execute(
        email,
        password
      );
      return response.json({
        data: userDateLogged,
      });
    } catch (error) {
      //@ts-ignore
      return response.status(404).json({ message: error.message });
    }
  }
}
export { AuthenticateClientController };
