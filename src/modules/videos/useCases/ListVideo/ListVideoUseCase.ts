import { ICreateVideoDTO } from "../../dtos/ICreateVideoDTO";
import { inject, injectable } from "tsyringe";
import { IVideoRepository } from "../../repositories/IVideoRepository";
@injectable()
class ListVideoUseCase {
  constructor(
    //@ts-ignore
    @inject("VideoRepository")
    private videoRepository: IVideoRepository
  ) {}
  async execute(videoId: string) {
    try {
      return await this.videoRepository.listVideoById(videoId);
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}
export { ListVideoUseCase };
