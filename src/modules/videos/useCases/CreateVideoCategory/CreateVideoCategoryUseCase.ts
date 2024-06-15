import { inject, injectable } from "tsyringe";
import { IVideoCategoryRepository } from "../../repositories/IVideoCategoryRepository";
import { ICreateVideoCategoryDTO } from "../../dtos/ICreateVideoCategory";

@injectable()
class CreateVideoCategoryUseCase {
  constructor(
    //@ts-ignore
    @inject("VideoCategoryRepository")
    private videoCategoryRepository: IVideoCategoryRepository
  ) {}
  async execute({ name }: ICreateVideoCategoryDTO) {
    try {
      return this.videoCategoryRepository.create({ name });
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}
export { CreateVideoCategoryUseCase };
