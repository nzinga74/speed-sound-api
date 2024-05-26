import { IMusicRepository } from "@modules/album/repositories/IMusicRepository";
import { inject, injectable } from "tsyringe";
@injectable()
class ListMusicUseCase {
  constructor(
    //@ts-ignore
    @inject("MusicRepository")
    private musicRepository: IMusicRepository
  ) {}
  async execute(albumId: string) {
    try {
      return await this.musicRepository.findByAlbum(albumId);
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}
export { ListMusicUseCase };
