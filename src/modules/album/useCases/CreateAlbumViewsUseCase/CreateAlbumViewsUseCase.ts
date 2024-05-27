import { ErrorConstants } from "@errors/ErrorConstants";
import { ICreateAlbumViewsDTO } from "@modules/album/dtos/ICreateAlbumViewsDTO";
import { IAlbumViewsRepository } from "@modules/album/repositories/IAlbumViewsRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class CreateAlbumViewsUseCase {
  constructor(
    //@ts-ignore
    @inject("AlbumViewsRepository")
    private albumViewsRepository: IAlbumViewsRepository
  ) {}
  async execute({ albumId, userId }: ICreateAlbumViewsDTO) {
    const albumViewAlreadyExists =
      await this.albumViewsRepository.findByUserAndAlbum({
        userId,
        albumId,
      });
    if (albumViewAlreadyExists) {
      throw new Error(ErrorConstants.ALBUM_VIEW_ALREADEY_EXISTS);
    }
    try {
      const albumView = await this.albumViewsRepository.create({
        albumId,
        userId,
      });
      return albumView;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}
export { CreateAlbumViewsUseCase };
