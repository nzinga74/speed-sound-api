import { ICreatePlaylistMusicDTO } from "@modules/playlist/dtos/ICreatePlaylistMusicDTO";
import { IPlaylistMusicRepository } from "@modules/playlist/repositories/IPlaylistMusicRepository";
import { inject, injectable } from "tsyringe";
@injectable()
class CreatePlaylistMusicUseCase {
  constructor(
    //@ts-ignore
    @inject("PlaylistMusicRepository")
    private playlistMusicRepository: IPlaylistMusicRepository
  ) {}
  async execute({ musicId, playlistId }: ICreatePlaylistMusicDTO) {
    try {
      return await this.playlistMusicRepository.create({
        musicId,
        playlistId,
      });
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}
export { CreatePlaylistMusicUseCase };
