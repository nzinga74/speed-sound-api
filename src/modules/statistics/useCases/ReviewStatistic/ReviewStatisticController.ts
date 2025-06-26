import { Request, Response } from "express";
import { container } from "tsyringe";
import { ReviewStatisticUseCase } from "./ReviewStatisticUseCase";
class ReviewStatisticController {
  async handle(request: Request, response: Response) {
    try {
      const { userId } = request.body;
      const reviewStatisticUseCase = container.resolve(ReviewStatisticUseCase);
      const totalVideo = await reviewStatisticUseCase.execute(userId);
      return response.status(200).json({
        data: totalVideo,
      });
    } catch (error: any) {
      return response.status(400).json({
        data: error.message,
      });
    }
  }
}
export { ReviewStatisticController };
