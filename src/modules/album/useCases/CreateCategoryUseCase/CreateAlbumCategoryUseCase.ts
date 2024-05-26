import { ICreateAlbumCategoryDTO } from "@modules/album/dtos/ICreateAlbumCategoryDTO";
import { IAlbumCategoryRepository } from "@modules/album/repositories/IAlbumCategoryRepository";
import { injectable, inject } from "tsyringe";
@injectable()
class CreateAlbumCategoryUseCase {
  constructor(
    //@ts-ignore
    @inject("AlbumCategoryRepository")
    private albumCategoryRepository: IAlbumCategoryRepository
  ) {}
  async execute({ name }: ICreateAlbumCategoryDTO) {
    try {
      return await this.albumCategoryRepository.create({ name });
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}
export { CreateAlbumCategoryUseCase };
