import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateVideoCategoryUseCase } from "./CreateVideoCategoryUseCase";
class CreateVideoCategoryController {
  async handle(request: Request, response: Response) {
    const createVideoCategoryUseCase = container.resolve(
      CreateVideoCategoryUseCase
    );
    const { name } = request.body;
    try {
      const videoCategory = await createVideoCategoryUseCase.execute({ name });
      return response.status(400).json({ data: videoCategory });
    } catch (error: any) {
      return response.status(400).json({ message: error.message });
    }
  }
}
export { CreateVideoCategoryController };
