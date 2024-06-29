import { ICreateVideoDTO } from "../../dtos/ICreateVideoDTO";
import { inject, injectable } from "tsyringe";
import { IVideoRepository } from "../../repositories/IVideoRepository";
@injectable()
class ListFollowedVideoUseCase {
  constructor(
    //@ts-ignore
    @inject("VideoRepository")
    private videoRepository: IVideoRepository
  ) {}
  async execute(userId: string) {
    try {
      return await this.videoRepository.listFollowedVideo(userId);
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}
export { ListFollowedVideoUseCase };
