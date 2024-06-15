import { inject, injectable } from "tsyringe";
import { IAlbumViewsRepository } from "@modules/album/repositories/IAlbumViewsRepository";

@injectable()
class ListMostViewedAlbumUseCase {
  constructor(
    //@ts-ignore
    @inject("AlbumViewsRepository")
    private albumViewsRepository: IAlbumViewsRepository
  ) {}
  async execute(limit: number) {
    try {
      const listMostViewedAlbuns =
        this.albumViewsRepository.listMostViewedAlbuns(limit);
      return listMostViewedAlbuns;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}
export { ListMostViewedAlbumUseCase };
