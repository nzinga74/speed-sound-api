import { inject, injectable } from "tsyringe";
import { IVideoViewsRepository } from "@modules/videos/repositories/IVideoViewsRepository";
@injectable()
class ListMostVideoViewsUseCase {
  constructor(
    //@ts-ignore
    @inject("VideoViewsRepository")
    private videoViewsRepository: IVideoViewsRepository
  ) {}

  async execute(limit: number) {
    try {
      return await this.videoViewsRepository.findMostViewedVideos(limit);
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}

export { ListMostVideoViewsUseCase };
