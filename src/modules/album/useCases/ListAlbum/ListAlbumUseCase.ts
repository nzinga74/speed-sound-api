import { IFindAlbumDTO } from "@modules/album/dtos/IFindAlbumDTO";
import { IAlbumRepository } from "@modules/album/repositories/IAlbumRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ListAlbumUseCase {
  constructor(
    //@ts-ignore
    @inject("AlbumRepository")
    private albumRepository: IAlbumRepository
  ) {}
  async execute({ albumId, categoryId, userId }: IFindAlbumDTO) {
    try {
      const albums = await this.albumRepository.findAlbums({
        albumId,
        categoryId,
        userId,
      });
      return albums;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}

export { ListAlbumUseCase };
