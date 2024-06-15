import { inject, injectable } from "tsyringe";
import { ICreateVideoViwsDTO } from "@modules/videos/dtos/ICreateVideoViewsDTO";
import { IVideoViewsRepository } from "@modules/videos/repositories/IVideoViewsRepository";
import { ErrorConstants } from "@errors/ErrorConstants";

@injectable()
class CreateVideoViewsUseCase {
  constructor(
    //@ts-ignore
    @inject("VideoViewsRepository")
    private videoViewsRepository: IVideoViewsRepository
  ) {}
  async execute({ userId, videoId }: ICreateVideoViwsDTO) {
    try {
      const existVideoViewedByUser =
        await this.videoViewsRepository.findByUserAndVideo({
          userId,
          videoId,
        });
      if (existVideoViewedByUser) {
        throw new Error(ErrorConstants.VIDEO_VIEW_ALREADY_EXISTS);
      }
      const videoView = await this.videoViewsRepository.create({
        userId,
        videoId,
      });
      return videoView;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}
export { CreateVideoViewsUseCase };
