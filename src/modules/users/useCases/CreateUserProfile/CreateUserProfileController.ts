import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserProfileUseCase } from "./CreateUserProfileUseCase";
import { ErrorConstants } from "@errors/ErrorConstants";
class CreateUserProfileController {
  async handle(request: Request, response: Response) {
    try {
      const { userId, description } = request.body;
      let image = "";
      const file = request.file;
      if (file) {
        image = file.filename;
      } else {
        return response.status(400).json({
          message: ErrorConstants.FILE_UPLOAD_ERROR,
        });
      }
      const createUserProfileUseCase = container.resolve(
        CreateUserProfileUseCase
      );
      const profile = await createUserProfileUseCase.execute({
        userId,
        description,
        image,
      });
      return response.status(200).json({
        data: profile,
      });
    } catch (error: any) {
      return response.status(200).json({
        data: error.message,
      });
    }
  }
}
export { CreateUserProfileController };
