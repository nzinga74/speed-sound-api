import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateAlbumCategoryUseCase } from "./CreateAlbumCategoryUseCase";
class CreateAlbumCategoryController {
  async handle(request: Request, response: Response) {
    const createCategoryUseCase = container.resolve(CreateAlbumCategoryUseCase);
    const { name } = request.body;
    try {
      const albumCategory = await createCategoryUseCase.execute({ name });
      return response.status(200).json({
        data: albumCategory,
      });
    } catch (error: any) {
      return response.status(400).json({
        message: error.message,
      });
    }
  }
}

export { CreateAlbumCategoryController };
