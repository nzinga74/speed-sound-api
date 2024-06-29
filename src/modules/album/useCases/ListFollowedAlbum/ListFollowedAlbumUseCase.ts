import { IAlbumRepository } from "@modules/album/repositories/IAlbumRepository";
import { inject, injectable } from "tsyringe";
@injectable()
class ListFollowedAlbumUseCase {
  constructor(
    //@ts-ignore
    @inject("AlbumRepository")
    private albumRepository: IAlbumRepository
  ) {}
  async execute(userId: string) {
    try {
      return await this.albumRepository.listFollowedAlbum(userId);
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}
export { ListFollowedAlbumUseCase };
