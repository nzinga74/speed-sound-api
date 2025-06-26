import { ICreateVideoDTO } from "../../dtos/ICreateVideoDTO";
import { inject, injectable } from "tsyringe";
import { IVideoRepository } from "../../repositories/IVideoRepository";
@injectable()
class CreateVideoUseCase {
  constructor(
    //@ts-ignore
    @inject("VideoRepository")
    private videoRepository: IVideoRepository
  ) {}
  async execute({
    categoryId,
    cover,
    description,
    title,
    video,
    userId,
    hls,
  }: ICreateVideoDTO) {
    try {
      return await this.videoRepository.create({
        categoryId,
        cover,
        description,
        title,
        video,
        userId,
        hls,
      });
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}
export { CreateVideoUseCase };
