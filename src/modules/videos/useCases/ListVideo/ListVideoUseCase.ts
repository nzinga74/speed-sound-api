import { ICreateVideoDTO } from "../../dtos/ICreateVideoDTO";
import { inject, injectable } from "tsyringe";
import { IVideoRepository } from "../../repositories/IVideoRepository";
import { IFindVideoDTO } from "@modules/videos/dtos/IFindVideoDTO";
@injectable()
class ListVideoUseCase {
  constructor(
    //@ts-ignore
    @inject("VideoRepository")
    private videoRepository: IVideoRepository
  ) {}
  async execute({ categoryId, userId, videoId }: IFindVideoDTO) {
    try {
      return await this.videoRepository.listVideos({
        categoryId,
        userId,
        videoId,
      });
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}
export { ListVideoUseCase };
