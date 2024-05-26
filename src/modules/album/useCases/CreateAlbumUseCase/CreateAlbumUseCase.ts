import { ErrorConstants } from "@errors/ErrorConstants";
import { ICreateAlbumDTO } from "@modules/album/dtos/ICreateAlbumDTO";
import { Album } from "@modules/album/models/Album";
import { IAlbumRepository } from "@modules/album/repositories/IAlbumRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class CreateAlbumUseCase {
  constructor(
    //@ts-ignore
    @inject("AlbumRepository")
    private albumRepository: IAlbumRepository
  ) {}
  async execute({
    categoryId,
    cover,
    description,
    title,
    userId,
  }: ICreateAlbumDTO) {
    try {
      const album = await this.albumRepository.createAlbum({
        categoryId,
        cover,
        description,
        title,
        userId,
      });
      return album;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}
export { CreateAlbumUseCase };
